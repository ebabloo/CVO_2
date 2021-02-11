import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayorInformationComponent } from './payor-information.component';

describe('PayorInformationComponent', () => {
  let component: PayorInformationComponent;
  let fixture: ComponentFixture<PayorInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayorInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
