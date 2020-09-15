import { Component } from '@angular/core';
import { Patient } from '../../assets/resources/patient';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  patient: Patient;

  constructor(private service: RestService) {
    service.getPatient().then((patient) => {
      this.patient = patient;
      console.log(this.patient);
    });
  }

  title = 'adroit';
  page = 'profile';
  navigate(page) {
    this.page = page;
  }
}
