import { TestBed } from '@angular/core/testing';

import { BookingFlightService } from './booking-flight.service';

describe('BookingFlightService', () => {
  let service: BookingFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
