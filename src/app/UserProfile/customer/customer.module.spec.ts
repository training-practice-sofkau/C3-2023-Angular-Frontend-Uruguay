import { TestBed } from '@angular/core/testing';

import { CustomerModule } from './customer.module';

describe('CustomerModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomerModule],
    });
  });

  it('initializes', () => {
    const module: CustomerModule = TestBed.inject(CustomerModule);
    expect(module).toBeTruthy();
  });
});
