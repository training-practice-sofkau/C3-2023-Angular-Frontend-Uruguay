import { TestBed } from '@angular/core/testing';

import { AccountModule } from './account.module';

describe('AccountModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AccountModule],
    });
  });

  it('initializes', () => {
    const module: AccountModule = TestBed.inject(AccountModule);
    expect(module).toBeTruthy();
  });
});
