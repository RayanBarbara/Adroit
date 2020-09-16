import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Appointment } from 'src/assets/resources/appointment';
import { DateTimePipe } from 'src/app/utils/pipes/dateTime.pipe';


@Component({
  selector: 'app-ask-appointement',
  templateUrl: './ask-appointement.component.html',
  styleUrls: ['./ask-appointement.component.scss'],
})
export class AskAppointementComponent implements OnInit {
  canClose = false;
  reasonList = ['Consultation de suivi', 'Retour examen', 'Premiere consultation'];
  priorityList = [0, 1, 2, 3, 4, 5];


  @Output() closeModalEvent = new EventEmitter<boolean>();
  constructor() { }

  date: string;
  hour: string;
  numberOfAppointment: number;

  appointment = {
    reason: '',
    ressourceType: 'Appointment',
    priority: null,
    comment: '',
    minuteDuration: 30,
    requestedPeriod: {
      start: '',
      end: ''
    }
  };

  ngOnInit(): void {

  }

  send() {
    this.appointment.requestedPeriod.start = this.transformDate(this.date, this.hour);
    console.log(this.appointment);
    // TODO : Ajouter post de l'appointment
  }

  transformDate(date: string, hour: string) {
    return date + 'T' + hour + ':00Z'
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
