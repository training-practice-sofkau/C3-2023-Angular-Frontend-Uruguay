import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAccountInfoComponent } from './modify-account-info.component';

describe('ModifyAccountInfoComponent', () => {
  let component: ModifyAccountInfoComponent;
  let fixture: ComponentFixture<ModifyAccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAccountInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
