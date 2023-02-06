import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GetbalanceComponent } from './getbalance.component';
import { GetbalanceModule } from './getbalance.module';

describe('GetbalanceComponent', () => {
  let component: GetbalanceComponent;
  let fixture: ComponentFixture<GetbalanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GetbalanceModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
