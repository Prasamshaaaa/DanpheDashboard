import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeWiseDetailsComponent } from './age-wise-details.component';

describe('AgeWiseDetailsComponent', () => {
  let component: AgeWiseDetailsComponent;
  let fixture: ComponentFixture<AgeWiseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeWiseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeWiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
