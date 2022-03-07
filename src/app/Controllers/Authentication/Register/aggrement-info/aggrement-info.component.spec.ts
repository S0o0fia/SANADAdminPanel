import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggrementInfoComponent } from './aggrement-info.component';

describe('AggrementInfoComponent', () => {
  let component: AggrementInfoComponent;
  let fixture: ComponentFixture<AggrementInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggrementInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggrementInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
