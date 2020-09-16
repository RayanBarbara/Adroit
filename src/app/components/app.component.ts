import { Component } from '@angular/core';
import { Observation } from '../../assets/resources/observation';
import { Patient, Practitioner } from '../../assets/resources/patient';
import { RestService } from '../services/rest.service';
import { delay } from '../utils/delay.function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  patient: Patient;
  practitioner: Practitioner;
  observation: Observation[];
  page: string;

  constructor(private service: RestService) {
    service.getPatient().then(async (patient) => {
      this.patient = patient;
      await delay(0);
      this.page = 'profile';
      service.getObservation().then((observation) => {
        this.observation = observation.filter((obs) => {
          if (obs.subject.reference == 'Patient/' + this.patient.id)
            return true;
          else return false;
        });
        this.observation.forEach((obs) => {
          const id = obs.performer[0].reference.replace('practitioner/', '');
          this.service.getPractitioner(id).then((practitioner) => {
            obs.performer[0].practitioner = practitioner;
          });
        });
        console.log(this.observation);
      });
    });
    service.getPractitioner('magicSystem2020').then((practitioner) => {
      this.practitioner = practitioner;
    });
  }

  title = 'adroit';
  navigate(page) {
    this.page = page;
  }
}
