import { randomBytes } from "crypto";
import nats from "node-nats-streaming";
import { TicketCreatedListener } from "./events/ticket-created-listener";

console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Listener connected to NATS");

  // Gracefully exiting, so that NATS knows beforehand  
  stan.on("close", () => {
    console.log("NATS connection closed!");  
    process.exit();
  });

  new TicketCreatedListener(stan).listen();
});

process.on("SIGINT", () => stan.close()); // So that multiple listeners are not created
process.on("SIGTERM", () => stan.close());
