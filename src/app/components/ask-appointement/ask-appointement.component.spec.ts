import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskAppointementComponent } from './ask-appointement.component';

describe('AskAppointementComponent', () => {
  let component: AskAppointementComponent;
  let fixture: ComponentFixture<AskAppointementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskAppointementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskAppointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
