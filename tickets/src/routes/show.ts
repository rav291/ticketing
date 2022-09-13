import { NotFoundError } from "@genericticketing/common";
import express, { Request, Response } from "express";
import Ticket from "../model/ticket";

const router = express.Router();

router.get("/api/tickets/:id", async (req: Request, res: Response) => {
  console.log(req.params.id);
  const ticket = await Ticket.findById(req.params.id);
  console.log(ticket);
  if (!ticket) {
    throw new NotFoundError();
  }

  res.send(ticket); // Status code defaults to 200 if not given
});

export { router as showTicketRouter };
