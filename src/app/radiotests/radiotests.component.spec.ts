import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiotestsComponent } from './radiotests.component';

describe('RadiotestsComponent', () => {
  let component: RadiotestsComponent;
  let fixture: ComponentFixture<RadiotestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiotestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiotestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
