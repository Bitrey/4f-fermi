import path from "path";
import fs from "fs";
import { Timetable } from "../interfaces";

const TIMETABLE_PATH = path.join(__dirname, "config/", "orario.txt");
const timetableFile = fs.readFileSync(TIMETABLE_PATH, "utf8");

let timetable: Timetable[] = [];
timetableFile
    .split("\n")
    .map(e => e.replace(/(?:\\[rn]|[\r\n]+)+/g, ""))
    .map(e => e.replace(/\s+/g, ""))
    .forEach(e => {
        if (e.endsWith(":")) {
            timetable.push(<any>{
                day: e.substring(0, e.length - 1),
                hours: []
            });
        } else {
            if (!e) return;
            const split = e.split("-");
            timetable[timetable.length - 1].hours.push(<any>{
                from: parseInt(split[0]),
                to: parseInt(split[1]),
                subject: split[2],
                professor: split[3].split(",")
            });
        }
    });
export default timetable;
