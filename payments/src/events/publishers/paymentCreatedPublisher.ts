import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from "@genericticketing/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
