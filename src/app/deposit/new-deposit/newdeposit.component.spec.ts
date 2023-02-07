import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewdepositComponent } from './newdeposit.component';
import { NewdepositModule } from './newdeposit.module';

describe('NewdepositComponent', () => {
  let component: NewdepositComponent;
  let fixture: ComponentFixture<NewdepositComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NewdepositModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
