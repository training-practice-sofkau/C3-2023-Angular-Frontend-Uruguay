import { TestBed } from '@angular/core/testing';

import { DepositModule } from './deposit.module';

describe('DepositModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DepositModule],
    });
  });

  it('initializes', () => {
    const module: DepositModule = TestBed.inject(DepositModule);
    expect(module).toBeTruthy();
  });
});
