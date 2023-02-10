import { TestBed } from '@angular/core/testing';

import { AccountsTableService } from './accounts-table.service';

describe('AccountsTableService', () => {
  let service: AccountsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
