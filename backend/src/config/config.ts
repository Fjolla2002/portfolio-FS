import dotenv from "dotenv";
import { Config } from "../entities/Config";

dotenv.config();

const configuration: Config = {
  MONGO_URI: process.env.MONGO_URI || "",
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,
};

export default configuration;
