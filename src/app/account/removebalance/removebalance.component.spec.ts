import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RemovebalanceComponent } from './removebalance.component';
import { RemovebalanceModule } from './removebalance.module';

describe('RemovebalanceComponent', () => {
  let component: RemovebalanceComponent;
  let fixture: ComponentFixture<RemovebalanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RemovebalanceModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovebalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
