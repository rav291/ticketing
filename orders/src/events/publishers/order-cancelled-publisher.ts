import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from "@genericticketing/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
