import mongoose from "mongoose";
import { config } from "../config/Constant";

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            console.log("MongoDB Connected");
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
}
