import timetable from "./functions/parseTimetable";

// dotenv
import "./config/dotenv";

// DB
import "./config/database";

// Express
import express from "express";
const app = express();

// Body parser
import bodyParser from "body-parser";
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

import routes from "./routes";
import { logger } from "./shared";
app.use("/", routes);

const PORT = Number(process.env.PORT) || 3000;
const IP = process.env.IP || "127.0.0.1";
app.listen(PORT, IP, () => logger.info(`Server started at ${IP}:${PORT}`));
