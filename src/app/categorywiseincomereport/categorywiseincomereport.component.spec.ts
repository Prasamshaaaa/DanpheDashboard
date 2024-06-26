import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorywiseincomereportComponent } from './categorywiseincomereport.component';

describe('CategorywiseincomereportComponent', () => {
  let component: CategorywiseincomereportComponent;
  let fixture: ComponentFixture<CategorywiseincomereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorywiseincomereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorywiseincomereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
