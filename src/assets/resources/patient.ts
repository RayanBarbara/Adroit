export class Patient {
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
  resourceType: resourceType;
  identifier: string[];
  active: boolean;
  _active: string;
  name: Name[];
  telecom: string[];
  gender: Gender;
  _gender: string;
  birthDate: any;
  _birthDate: string;
  deceasedBoolean: boolean;
  _deceasedBoolean: string;
  deceasedDateTime: string;
  _deceasedDateTime: string;
  address: Adress[];
  maritalStatus: string;
  multipleBirthBoolean: boolean;
  _multipleBirthBoolean: string;
  multipleBirthInteger: 0;
  _multipleBirthInteger: string;
  photo: any[];
  contact: string[];
  animal: string;
  communication: string[];
  generalPractitioner: Practitioner[];
  managingOrganization: string;
  link: string[];
}

class Practitioner {
  identifier: string;
  active: boolean;
  name: Name[];
  telecom: any[];
  adress: Adress[];
  gender: Gender;
  birthDate: Date;
  photo: any[];
  qualification: any[];
}

class Name {
  use: NameUse;
  text: string;
  family: string;
  given: string[];
  prefix: string[];
  suffix: string[];
  period: Period;
}

class Period {
  start: Date;
  end: Date;
}

class Adress {
  line: string[];
  city: string;
  postalCode: number;
}

export enum Gender {
  'male',
  'female',
}

enum resourceType {
  'Patient',
}

enum NameUse {
  'usual',
  'official',
  'temp',
  'nickname',
  'anonymous',
  'old',
  'maiden',
}
