// Env variables
import dotenv from "dotenv";
dotenv.config();

// Check env
export const { MONGOOSE_URI } = process.env;
if (typeof MONGOOSE_URI !== "string") {
    console.error("Invalid MONGOOSE_URI env");
    process.exit(1);
}
