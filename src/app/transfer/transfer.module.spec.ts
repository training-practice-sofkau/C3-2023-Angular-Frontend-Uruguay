import { TestBed } from '@angular/core/testing';

import { TransferModule } from './transfer.module';

describe('TransferModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TransferModule],
    });
  });

  it('initializes', () => {
    const module: TransferModule = TestBed.inject(TransferModule);
    expect(module).toBeTruthy();
  });
});
