import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()
const app = createExpressServer({
  cors: {
    origin: "*",
    credentials: true,
  },
});

mongoose.connect(process.env.DB_CONNECTION_STR).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Database connected and server is running on port ${process.env.PORT}`
    );
  });
});
