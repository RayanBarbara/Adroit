import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @Output() page = new EventEmitter<string>();
  askAppointment = false;
  constructor() {}
  askForAnAppointment() {
    this.askAppointment = !this.askAppointment;
  }
  navigate(page: string) {
    this.page.emit(page);
  }
  ngOnInit(): void {}
}
