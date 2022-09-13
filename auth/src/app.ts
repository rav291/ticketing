import express from "express";
import { json } from "body-parser";
import "express-async-errors";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError } from "@genericticketing/common";

const app = express();
app.set("trust proxy", true); // Trust ingress/nginx(used in skaffold) proxy

app.use(json());
app.use(
  cookieSession({
    signed: false, // disable default cookie encryption
    secure: process.env.NODE_ENV !== "test", // https
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// 1. app.all("*", () => {
//   // Any other route, any http method
//   throw new NotFoundError();
// });

app.all("*", async (req, res, next) => {
  // Any other route, any http method
  throw new NotFoundError();
});

// 3. app.all("*", async (req, res, next) => { <- Use this method with without express-async-errors package
//   // Any other route, any http method
//   next(new NotFoundError());
// });

app.use(errorHandler);

export { app };
