import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observation } from '../../assets/resources/observation';
import { Patient, Practitioner } from '../../assets/resources/patient';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  server = 'https://fhir.eole-consulting.io/api/';
  patientID = '5f5f85553ef92800151f13a7';
  gpID = ['5f5f82fe3ef92800151f13a6', 'magicSystem2020'];

  constructor(private http: HttpClient) {}

  private handleError(error: any): Promise<any> {
    if (error !== null) {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
  }

  private setHeaders(user: string): HttpHeaders {
    const headers = new HttpHeaders({
      'X-user': localStorage.getItem('username'),
    });
    return headers;
  }

  getPatient(): Promise<Patient> {
    return this.http
      .get(this.server + 'patient/' + this.patientID)
      .toPromise()
      .catch(this.handleError);
  }
  getPractitioner(): Promise<Practitioner> {
    return this.http
      .get(this.server + 'practitioner/' + this.gpID[1])
      .toPromise()
      .catch(this.handleError);
  }

  getObservation(): Promise<Observation[]> {
    return this.http
      .get(this.server + 'observation')
      .toPromise()
      .catch(this.handleError);
  }
}
