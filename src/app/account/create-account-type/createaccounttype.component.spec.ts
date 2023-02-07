import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateaccounttypeComponent } from './createaccounttype.component';
import { CreateaccounttypeModule } from './createaccounttype.module';

describe('CreateaccounttypeComponent', () => {
  let component: CreateaccounttypeComponent;
  let fixture: ComponentFixture<CreateaccounttypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CreateaccounttypeModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaccounttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
