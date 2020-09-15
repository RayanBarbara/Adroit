export class Patient {
  id: string;
  _id: string;
  extension: [string];
  meta: string;
  implicitRules: string;
  _implicitRules: string;
  language: string;
  _language: string;
  text: string;
  contained: [string];
  modifierExtension: [string];
  resourceType: resourceType;
  identifier: [string];
  active: true;
  _active: string;
  name: [string];
  telecom: [string];
  gender: Gender;
  _gender: string;
  birthDate: any;
  _birthDate: string;
  deceasedBoolean: true;
  _deceasedBoolean: string;
  deceasedDateTime: string;
  _deceasedDateTime: string;
  address: [string];
  maritalStatus: string;
  multipleBirthBoolean: true;
  _multipleBirthBoolean: string;
  multipleBirthInteger: 0;
  _multipleBirthInteger: string;
  photo: [string];
  contact: [string];
  animal: string;
  communication: [string];
  generalPractitioner: [string];
  managingOrganization: string;
  link: [string];
}

enum Gender {
  'male',
  'female',
}

enum resourceType {
  'Patient',
}
