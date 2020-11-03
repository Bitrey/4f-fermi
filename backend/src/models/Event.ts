import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: "events", timestamps: true } })
export class EventClass {
    @prop({
        required: true,
        enum: ["writtenTest", "oralTest", "homework", "other"]
    })
    public type!: "writtenTest" | "oralTest" | "homework" | "other";

    @prop({ required: true, minlength: 5, maxlength: 300 })
    public body!: string;

    @prop({ required: true })
    public date!: Date;
}

const Event = getModelForClass(EventClass);

export default Event;
