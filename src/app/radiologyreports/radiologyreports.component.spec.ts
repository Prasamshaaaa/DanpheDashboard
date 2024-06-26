import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologyreportsComponent } from './radiologyreports.component';

describe('RadiologyreportsComponent', () => {
  let component: RadiologyreportsComponent;
  let fixture: ComponentFixture<RadiologyreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiologyreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologyreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
