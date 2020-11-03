import { mongoose } from "@typegoose/typegoose";
import { Response, Router } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR, NOT_FOUND, OK } from "http-status";
import { isValidObjectId } from "mongoose";
import Event from "../models/Event";
const router = Router();

interface SearchInterface {
    type?: "writtenTest" | "oralTest" | "homework" | "other";
    date?: Date;
}

const isValidType = (type?: string): boolean => {
    return (
        type === "writtenTest" ||
        type === "oralTest" ||
        type === "homework" ||
        type === "other"
    );
};

const isValidBody = (body?: string): boolean => {
    return typeof body === "string"
        ? body.length > 5 && body.length < 300
            ? true
            : false
        : false;
};

const isValidDate = (date?: string | Date): boolean => {
    return date ? !isNaN(Date.parse(<string>date)) : false;
};

const checkFields = (
    res: Response,
    type: string,
    date: string | Date,
    body: string,
    id?: string
): boolean => {
    if (id && !isValidObjectId(id)) {
        res.status(BAD_REQUEST).send("Please provide a valid ObjectId");
        return false;
    } else if (!isValidType(type)) {
        res.status(BAD_REQUEST).send(
            "Please provide a valid 'type' ('writtenTest' || 'oralTest' || 'homework' || 'other')"
        );
        return false;
    } else if (!isValidBody(body)) {
        res.status(BAD_REQUEST).send("Please provide a valid 'body'");
        return false;
    } else if (!isValidDate(date)) {
        res.status(BAD_REQUEST).send("Please provide a valid 'date'");
        return false;
    }
    return true;
};

router.get("/", async (req, res) => {
    const { type, date } = req.params;

    const query: SearchInterface = {};
    if (isValidType(type)) query.type = <any>type;
    if (isValidDate(date)) query.date = <any>date;

    try {
        const events = await Event.find(query).exec();
        res.json(events);
    } catch (err) {
        console.error(err);
        res.status(INTERNAL_SERVER_ERROR).send(err);
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(BAD_REQUEST).send("Please provide a valid ObjectId");
    }

    try {
        const event = await Event.findOne({ _id: id }).exec();
        res.json(event);
    } catch (err) {
        console.error(err);
        res.status(INTERNAL_SERVER_ERROR).send(err);
    }
});

router.post("/", async (req, res) => {
    const { type, body, date } = req.body;

    if (!checkFields(res, type, date, body)) return;

    const event = new Event({ type, body, date });

    try {
        await event.save();
        res.json(event);
    } catch (err) {
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(BAD_REQUEST).send(err.message);
        } else {
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR).send(err);
        }
    }
});

router.put("/:id", async (req, res) => {
    const { type, body, date } = req.body;
    const { id } = req.params;

    if (!checkFields(res, type, date, body, id)) return;

    let event;
    try {
        event = await Event.findOneAndUpdate(
            { _id: id },
            { type, body, date }
        ).exec();
    } catch (err) {
        console.error(err);
        return res.status(INTERNAL_SERVER_ERROR).send(err);
    }

    if (!event) {
        return res.status(NOT_FOUND).send("Event not found");
    }

    try {
        await event.save();
        res.json(event);
    } catch (err) {
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(BAD_REQUEST).send(err.message);
        } else {
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR).send(err);
        }
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(BAD_REQUEST).send("Please provide a valid ObjectId");
    }

    try {
        await Event.deleteOne({ _id: id }).exec();
        res.sendStatus(OK);
    } catch (err) {
        console.error(err);
        res.status(INTERNAL_SERVER_ERROR).send(err);
    }
});

router.all("/", (req, res) => res.sendStatus(NOT_FOUND));

export default router;
