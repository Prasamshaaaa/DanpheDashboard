import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionsummaryComponent } from './fractionsummary.component';

describe('FractionsummaryComponent', () => {
  let component: FractionsummaryComponent;
  let fixture: ComponentFixture<FractionsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FractionsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FractionsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
