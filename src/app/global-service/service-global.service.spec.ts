import { TestBed } from '@angular/core/testing';

import { ServiceGlobalService } from './service-global.service';

describe('ServiceGlobalService', () => {
  let service: ServiceGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
