import { currentUser } from "@genericticketing/common";
import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", currentUser, (req, res) => {
  // console.log(req.currentUser || null);
  res.send({ currentUser: req.currentUser || null }); // putting null since currentUser can be undefined
});

export { router as currentUserRouter };
