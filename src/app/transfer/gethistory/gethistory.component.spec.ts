import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GethistoryComponent } from './gethistory.component';
import { GethistoryModule } from './gethistory.module';

describe('GethistoryComponent', () => {
  let component: GethistoryComponent;
  let fixture: ComponentFixture<GethistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GethistoryModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GethistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
