import configuration from "./config/config";
import express from "express";
import cors from "cors";
import connect from "./db/mongo";

(async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  await connect();

  app.listen(configuration.PORT, () => {
    console.log(`Server is running on port ${configuration.PORT}`);
  });
})();
