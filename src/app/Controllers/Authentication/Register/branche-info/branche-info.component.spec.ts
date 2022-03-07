import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancheInfoComponent } from './branche-info.component';

describe('BrancheInfoComponent', () => {
  let component: BrancheInfoComponent;
  let fixture: ComponentFixture<BrancheInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrancheInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrancheInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
