import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensureComponent } from './licensure.component';

describe('LicensureComponent', () => {
  let component: LicensureComponent;
  let fixture: ComponentFixture<LicensureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
