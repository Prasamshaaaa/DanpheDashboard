import { TestBed } from '@angular/core/testing';

import { TimeperiodService } from './timeperiod.service';

describe('TimeperiodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeperiodService = TestBed.get(TimeperiodService);
    expect(service).toBeTruthy();
  });
});
