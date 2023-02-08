import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStateComponent } from './change-state.component';

describe('ChangeStateComponent', () => {
  let component: ChangeStateComponent;
  let fixture: ComponentFixture<ChangeStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
