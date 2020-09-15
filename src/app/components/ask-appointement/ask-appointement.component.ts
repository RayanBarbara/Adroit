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
  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  addAppointment() {
    alert("Hello world!");
  }

  closeModal() {
    console.log("Test");
    if (this.canClose===true) {
      this.closeModalEvent.emit(false);
    } else {
      this.canClose = true;
    }
  }
}
