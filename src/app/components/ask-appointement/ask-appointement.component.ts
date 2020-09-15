import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ask-appointement',
  templateUrl: './ask-appointement.component.html',
  styleUrls: ['./ask-appointement.component.scss'],
})
export class AskAppointementComponent implements OnInit {
  canClose = false;
  reasonList=['Consultation de suivi', 'Retour examen', 'Premiere consultation'];


  @Output() closeModalEvent = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  addAppointment() {
    console.log()
  }

  closeModal() {
    if (this.canClose === true) {
      this.closeModalEvent.emit(false);
    } else {
      this.canClose = true;
    }
  }
}
