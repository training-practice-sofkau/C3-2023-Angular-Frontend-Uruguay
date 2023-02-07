import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFinderComponent } from './transfer-finder.component';

describe('TransferFinderComponent', () => {
  let component: TransferFinderComponent;
  let fixture: ComponentFixture<TransferFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
