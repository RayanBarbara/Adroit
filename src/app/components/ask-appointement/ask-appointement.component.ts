import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-ask-appointement',
  templateUrl: './ask-appointement.component.html',
  styleUrls: ['./ask-appointement.component.scss']
})
export class AskAppointementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addAppointment(){
    alert("Hello world!");
  }

}
