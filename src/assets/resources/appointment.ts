export class Appointment {
    id: string;
    description: string;
    comment: string;
    participant: Actor[]
    requestedPeriod: Period;
}

class Actor {
    reference: string;
    display: string;
}

class Period {
    start: string;
    end: string;
}
