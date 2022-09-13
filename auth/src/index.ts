import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT must be defined");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("Mongo URI must be defined");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI); // auth is db name, inside the db created by mongo, which mongo generates itself
  } catch (error) {
    console.error(error);
  }
  console.log("Connected to MongoDB");
  app.listen(3000, () => {
    console.log("Listening on port 3000 !");
  });
};

start();
