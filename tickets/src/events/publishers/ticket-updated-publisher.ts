import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@genericticketing/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
