import express from "express";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import {
  currentUser,
  errorHandler,
  NotFoundError,
} from "@genericticketing/common";
import { createChargeRouter } from "./routes/new";

const app = express();
app.set("trust proxy", true); // Trust ingress/nginx(used in skaffold) proxy

app.use(json());
app.use(
  cookieSession({
    signed: false, // disable default cookie encryption
    secure: process.env.NODE_ENV !== "test", // https
  })
);

app.use(currentUser);
app.use(createChargeRouter);

// 1. app.all("*", () => {
//   // Any other route, any http method
//   throw new NotFoundError();
// });

app.all("*", async (req, res) => {
  // Any other route, any http method
  throw new NotFoundError();
});

// 3. app.all("*", async (req, res, next) => { <- Use this method with without express-async-errors package
//   // Any other route, any http method
//   next(new NotFoundError());
// });

app.use(errorHandler);

export { app };
