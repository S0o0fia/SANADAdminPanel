import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancheInfoFormComponent } from './branche-info-form.component';

describe('BrancheInfoFormComponent', () => {
  let component: BrancheInfoFormComponent;
  let fixture: ComponentFixture<BrancheInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrancheInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrancheInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
