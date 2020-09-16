import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observation } from '../../../assets/resources/observation';
import { Practitioner } from '../../../assets/resources/patient';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @Input() observations: Observation[];
  @Output() page = new EventEmitter<string>();
  askAppointment = false;
  selectedObservation: Observation = null;

  constructor(private service: RestService) {}

  askForAnAppointment() {
    this.askAppointment = !this.askAppointment;
  }
  selectObservation(obs: Observation) {
    if (this.selectedObservation !== obs) {
      this.selectedObservation = obs;
    } else {
      this.selectedObservation = null;
    }
  }
  async performer(performerID: string) {
    const id = performerID.replace('Practitioner/', '');
    let name;
    await this.service
      .getPractitioner(id)
      .then((Practitioner: Practitioner) => {
        name = Practitioner.name[0].prefix + ' ' + Practitioner.name[0].family;
      });
    return name;
  }
  navigate(page: string) {
    this.page.emit(page);
  }
  ngOnInit(): void {}
}
