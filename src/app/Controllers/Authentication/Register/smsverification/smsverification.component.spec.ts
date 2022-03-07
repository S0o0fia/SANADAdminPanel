import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMSVerificationComponent } from './smsverification.component';

describe('SMSVerificationComponent', () => {
  let component: SMSVerificationComponent;
  let fixture: ComponentFixture<SMSVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMSVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMSVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
