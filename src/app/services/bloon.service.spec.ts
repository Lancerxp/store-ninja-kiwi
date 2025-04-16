import { TestBed } from '@angular/core/testing';

import { BloonService } from './bloon.service';

describe('BloonService', () => {
  let service: BloonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
