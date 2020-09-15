import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ask-appointement',
  templateUrl: './ask-appointement.component.html',
  styleUrls: ['./ask-appointement.component.scss']
})
export class AskAppointementComponent implements OnInit {
  canClose = false;
  modal: string=null;
  @Output() closeModalEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  addAppointment() {
    alert("Hello world!");
  }

  closeModal() {
    if (this.canClose==false) {
      this.closeModalEvent.emit();
    } else {
      this.canClose = true;
    }
  }
}
