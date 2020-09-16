import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Practitioner } from '../../../assets/resources/patient';

@Component({
  selector: 'app-ask-appointement',
  templateUrl: './ask-appointement.component.html',
  styleUrls: ['./ask-appointement.component.scss'],
})
export class AskAppointementComponent implements OnInit {
  canClose = false;
  descriptionList = [
    'Consultation de suivi',
    'Retour examen',
    'Premiere consultation',
  ];
  priorityList = [0, 1, 2, 3, 4, 5];

  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Input() practitioner: Practitioner;
  constructor(private service: RestService) { }

  date: string;
  hour: string;
  numberOfAppointment: number;
  description: string;
  comment: string;
  priority: number;

  ngOnInit(): void { }

  send() {
    let appointement = {
      "description": this.description,
      "resourceType": "Appointment",
      "comment": this.comment,
      "priority": this.priority,
      "participant": [
        {
          "actor": {
            "reference": "Patient/5f5f85553ef92800151f13a7",
            "display": "Julien Mari"
          },
          "status": "needs-action"
        },
        {
          "actor": {
            "reference": "Practitioner/magicSystem2020",
            "display": "Tsague Kevin"
          },
          "status": "needs-action"
        }
      ],
      "start": this.transformDate(this.date, this.hour)
    };
    this.service.postAppointment(appointement).then((response) => {
      console.log(response);
    });
    if (this.canClose === true) {
      this.closeModalEvent.emit(false);
    } else {
      this.canClose = true;
    }
  }

  transformDate(date: string, hour: string) {
    return date + 'T' + hour + ':00Z';
  }

  addHour(hour: string) {
    const duration = 30;
  }

  closeModal() {
    if (this.canClose === true) {
      this.closeModalEvent.emit(false);
    } else {
      this.canClose = true;
    }
  }
}
