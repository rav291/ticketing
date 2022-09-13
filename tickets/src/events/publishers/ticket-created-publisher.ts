import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@genericticketing/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
