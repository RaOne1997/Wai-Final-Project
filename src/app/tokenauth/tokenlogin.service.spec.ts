import { TestBed } from '@angular/core/testing';

import { TokenloginService } from './tokenlogin.service';

describe('TokenloginService', () => {
  let service: TokenloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
