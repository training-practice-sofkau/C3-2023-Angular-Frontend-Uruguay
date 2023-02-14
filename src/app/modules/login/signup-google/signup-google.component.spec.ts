import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupGoogleComponent } from './signup-google.component';

describe('SignupGoogleComponent', () => {
  let component: SignupGoogleComponent;
  let fixture: ComponentFixture<SignupGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupGoogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
