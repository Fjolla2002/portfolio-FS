import mongoose from "mongoose";
import configuration from "../config/config";

async function connect(): Promise<void> {
  try {
    await mongoose.connect(configuration.MONGO_URI);

    console.log("Connected to MongoDB");

    mongoose.connection.on("error", (err: Error) => {
      console.error("Error in MongoDB connection:", err);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

export default connect;
