import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@genericticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
    