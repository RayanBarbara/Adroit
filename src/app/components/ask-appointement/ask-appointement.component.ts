import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Appointment } from 'src/assets/resources/appointment';

@Component({
  selector: 'app-ask-appointement',
  templateUrl: './ask-appointement.component.html',
  styleUrls: ['./ask-appointement.component.scss'],
})
export class AskAppointementComponent implements OnInit {
  canClose = false;
  reasonList = ['Consultation de suivi', 'Retour examen', 'Premiere consultation'];


  @Output() closeModalEvent = new EventEmitter<boolean>();
  constructor() { }

  appointment = {
    requestedPeriod: {
      date: '',
      hour: '',
    },
    reason: '',
    comment: ''
  };

  ngOnInit(): void {

  }

  send() {
    console.log(this.appointment);
    // TODO : Ajouter post de l'appointment
  }

  closeModal() {
    if (this.canClose === true) {
      this.closeModalEvent.emit(false);
    } else {
      this.canClose = true;
    }
  }
}
