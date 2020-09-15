import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  askAppointment = false;
  constructor() {}
  askForAnAppointment(ask: boolean) {
    console.log('ask'+ask);
    this.askAppointment = !this.askAppointment;
    console.log(this.askAppointment);
  }
  ngOnInit(): void {}
}
