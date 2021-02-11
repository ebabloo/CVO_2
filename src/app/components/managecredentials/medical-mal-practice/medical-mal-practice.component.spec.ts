import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalMalPracticeComponent } from './medical-mal-practice.component';

describe('MedicalMalPracticeComponent', () => {
  let component: MedicalMalPracticeComponent;
  let fixture: ComponentFixture<MedicalMalPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalMalPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalMalPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
