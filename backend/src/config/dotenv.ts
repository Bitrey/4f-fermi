// Env variables
import dotenv from "dotenv";
import { logger } from "../shared";
dotenv.config();

// Check env
export const { MONGOOSE_URI } = process.env;
if (typeof MONGOOSE_URI !== "string") {
    logger.error("Invalid MONGOOSE_URI env");
    process.exit(1);
}
