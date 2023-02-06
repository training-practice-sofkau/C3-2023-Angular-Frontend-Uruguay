import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddbalanceComponent } from './addbalance.component';
import { AddbalanceModule } from './addbalance.module';

describe('AddbalanceComponent', () => {
  let component: AddbalanceComponent;
  let fixture: ComponentFixture<AddbalanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AddbalanceModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
