import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerReferencesComponent } from './peer-references.component';

describe('PeerReferencesComponent', () => {
  let component: PeerReferencesComponent;
  let fixture: ComponentFixture<PeerReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeerReferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
