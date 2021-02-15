import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalAndEducationalInfoComponent } from './professional-and-educational-info.component';

describe('ProfessionalAndEducationalInfoComponent', () => {
  let component: ProfessionalAndEducationalInfoComponent;
  let fixture: ComponentFixture<ProfessionalAndEducationalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalAndEducationalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalAndEducationalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
