import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBtnComponent } from './modify-btn.component';

describe('ModifyBtnComponent', () => {
  let component: ModifyBtnComponent;
  let fixture: ComponentFixture<ModifyBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
