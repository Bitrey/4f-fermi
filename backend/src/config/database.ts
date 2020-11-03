// Mongoose setup
import mongoose from "mongoose";
import { MONGOOSE_URI } from "./dotenv";
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("returnOriginal", false);

mongoose.connect(<string>MONGOOSE_URI, err =>
    err ? console.error(err) : console.info("Connected to MongoDB")
);
