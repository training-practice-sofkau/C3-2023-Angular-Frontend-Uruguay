import { TestBed } from '@angular/core/testing';

import { TransaccionsService } from './transaccions.service';

describe('TransaccionsService', () => {
  let service: TransaccionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaccionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
