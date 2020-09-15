import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Gender,
  Patient,
  Practitioner,
} from '../../../assets/resources/patient';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() patient: Patient;
  @Input() practitioner: Practitioner;
  @Output() page = new EventEmitter<string>();
  avatar = '../../../assets/resources/avatar_homme.svg';

  constructor() {
    if (this.patient && this.patient.gender === Gender['female']) {
      this.avatar = '../../assets/resources/avatar_femme.svg';
    }
  }

  navigate(page: string) {
    this.page.emit(page);
  }

  ngOnInit(): void {}
}
