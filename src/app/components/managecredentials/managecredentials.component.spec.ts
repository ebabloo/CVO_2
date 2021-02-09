import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecredentialsComponent } from './managecredentials.component';

describe('ManagecredentialsComponent', () => {
  let component: ManagecredentialsComponent;
  let fixture: ComponentFixture<ManagecredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecredentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
