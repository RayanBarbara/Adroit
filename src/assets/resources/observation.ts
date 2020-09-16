import { Code } from './code';
import { Practitioner } from './patient';

export class Observation {
  id: string;
  resourceType: string;
  identifier: any[];
  basedOn: any[];
  partOf: any[];
  status: Code;
  category: Category[];
  code: any;
  subject: {
    reference: string;
  };
  focus: any[];
  encounter: any;
  effectiveDateTime: string;
  effectivePeriod: any;
  effectiveTiming: any;
  effectiveInstant: any;
  issued: any;
  performer: Performer[];
  valueQuantity: valueQuantity;
  valueCodeableConcept: any;
  valueString: string;
  valueBoolean: boolean;
  valueInteger: number;
  valueRange: any;
  valueRatio: any;
  valueSampledData: any;
  valueTime: any;
  valueDateTime: any;
  valuePeriod: any;
  dataAbsentReason: any;
  interpretation: any[];
  note: any[];
  bodySite: any;
  method: any;
  specimen: any;
  device: any;
  referenceRange: [
    {
      low: any;
      high: any;
      type: any;
      appliesTo: any[];
      age: any;
      text: string;
    }
  ];
  hasMember: any[];
  derivedFrom: any[];
  component: [
    {
      code: any;
      valueQuantity: any;
      valueCodeableConcept: any;
      valueString: string;
      valueBoolean: boolean;
      valueInteger: number;
      valueRange: any;
      valueRatio: any;
      valueSampledData: any;
      valueTime: any;
      valueDateTime: any;
      valuePeriod: any;
      dataAbsentReason: any;
      interpretation: any[];
      referenceRange: any[];
    }
  ];
}

class Category {
  coding: Coding[];
  text: string;
}

class Coding {
  system: string;
  code: string;
  display: string;
}

class Performer {
  reference: string;
  practitioner: Practitioner;
}

class valueQuantity {
  value: number;
  unit: string;
  system: string;
  code: string;
}
