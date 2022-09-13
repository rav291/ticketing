import {
  Listener,
  OrderCreatedEvent,
  Subjects,
} from "@genericticketing/common";
import { Message } from "node-nats-streaming";
import { Order } from "../models/order";
import { queueGroupName } from "./queue-group-name";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    const { price } = data.ticket;
    const { id, status, version, userId } = data;
    const order = Order.build({
      id,
      status,
      version,
      userId,
      price,
    });

    await order.save();

    msg.ack();
  }
}
