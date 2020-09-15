export class appointments {
    id: string;
    _id: string;
    extension: string[];
    meta: string;
    implicitRules: string;
    _implicitRules: string;
    language: string;
    _language: string;
    text: string;
    contained: string[];
    modifierExtension: string[];
    resourceType: RessourceType;
    identifier: string[];
    status: Status;
    _status: Status;
    serviceCategory: string;
    serviceType: string[];
    specialty: string[];
    appointmentType: string;
    reason: string[];
    indication: string[];
    priority: 0;
    _priority: number;
    description: string;
    _description: string;
    supportingInformation: string[];
    start: string;
    _start: string;
    end: string;
    _end: string;
    minuteDuration: 0;
    _mnutesDuration: number;
    slot: string[];
    created: string;
    _created: string;
    comment: string;
    _comment: string;
    incomingReferral: string[];
    particpant: Particpant[];
    requestedPeriod: Period[]
}

class Period{
    date: string;
    hour: string;
}

class Particpant{
    idParticipant: string;

}

enum role{
    'Patient',
    'Practician',
}

enum Reasons{
    'Consultation de suivi',
    'Retour examen',
    'Premiere consultation',
}

enum RessourceType{
    'Appointment',
}

enum Status{
    'Proposed',
}