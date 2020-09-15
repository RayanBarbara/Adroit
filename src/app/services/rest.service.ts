import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../../assets/resources/patient';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  server = 'https://fhir.eole-consulting.io/api/';
  patientID = '5f5f85553ef92800151f13a7';

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
}
