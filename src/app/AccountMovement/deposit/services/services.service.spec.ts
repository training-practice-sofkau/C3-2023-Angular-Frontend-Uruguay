import { TestBed } from '@angular/core/testing';

import { ServicesService } from './deposit.service';

describe('ServicesService', () => {
  let service: ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
