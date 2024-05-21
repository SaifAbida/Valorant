import "reflect-metadata";
import { createExpressServer, useContainer } from "routing-controllers";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { container } from "./Container";
import { AgentControllers } from "./controllers/AgentControllers";
import { MapControllers } from "./controllers/MapControllers";
import { WeaponControllers } from "./controllers/WeaponControllers";
import express from "express";
import path from "path"

dotenv.config();
useContainer(container);

const app = createExpressServer({
  controllers: [AgentControllers, MapControllers, WeaponControllers],
  cors: {
    origin: "*",
    credentials: true,
  },
});

app.use("/images", express.static(path.join(__dirname, "images")));

mongoose.connect(process.env.DB_CONNECTION_STR).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Database connected and server is running on port ${process.env.PORT}`
    );
  });
});
