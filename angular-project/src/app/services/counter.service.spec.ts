import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterServiceService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
