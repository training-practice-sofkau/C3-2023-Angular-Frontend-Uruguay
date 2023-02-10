import { TestBed } from '@angular/core/testing';

import { ServiceLogIn } from './service-login.service';

describe('ServiceLogInService', () => {
  let service: ServiceLogIn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLogIn);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
