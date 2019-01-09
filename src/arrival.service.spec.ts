import { TestBed } from '@angular/core/testing';

import { ArrivalService } from './arrival.service';

describe('ArrivalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrivalService = TestBed.get(ArrivalService);
    expect(service).toBeTruthy();
  });
});
