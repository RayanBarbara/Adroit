import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Patient } from '../../../assets/resources/patient';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() patient: Patient;
  @Output() page = new EventEmitter<string>();

  constructor() {}

  navigate(page: string) {
    this.page.emit(page);
  }

  ngOnInit(): void {}
}
