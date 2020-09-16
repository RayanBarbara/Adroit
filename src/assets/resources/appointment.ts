import { Code } from './code';
export class Appointment {
    id: string;
    requestedPeriod: Period;
    reason: string;
    comment: string;
    participant: Participant[]
}

class Participant {
    idParticipant: string;
    role: Role;
}

enum Role {
    "Patient",
    "Practiciant"
}

class Period {
    date: string;
    hour: string;
}