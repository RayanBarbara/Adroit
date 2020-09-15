import { Code } from './code';
import { Patient } from './patient';

export class Observation {
  resourceType: string;
  identifier: any[];
  basedOn: any[];
  partOf: any[];
  status: Code;
  category: any[];
  code: any;
  subject: Patient;
  focus: any[];
  encounter: any;
  effectiveDateTime: any;
  effectivePeriod: any;
  effectiveTiming: any;
  effectiveInstant: any;
  issued: any;
  performer: any[];
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
