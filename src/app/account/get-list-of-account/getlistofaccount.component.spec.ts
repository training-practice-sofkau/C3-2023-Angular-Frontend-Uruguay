import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GetlistofaccountComponent } from './getlistofaccount.component';
import { GetlistofaccountModule } from './getlistofaccount.module';

describe('GetlistofaccountComponent', () => {
  let component: GetlistofaccountComponent;
  let fixture: ComponentFixture<GetlistofaccountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GetlistofaccountModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistofaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
