import {
  OrderCreatedEvent,
  Publisher,
  Subjects,
} from "@genericticketing/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
