import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() page = new EventEmitter<string>();

  constructor() {}

  navigate(page: string) {
    this.page.emit(page);
  }

  ngOnInit(): void {}
}
