import { Component } from '@angular/core';
import { Patient } from '../../assets/resources/patient';
import { RestService } from '../services/rest.service';
import { delay } from '../utils/delay.function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  patient: Patient;
  page: string;

  constructor(private service: RestService) {
    service.getPatient().then(async (patient) => {
      this.patient = patient;
      await delay(0);
      this.page = 'profile';
      console.log(this.patient);
    });
  }

  title = 'adroit';
  navigate(page) {
    this.page = page;
  }
}
