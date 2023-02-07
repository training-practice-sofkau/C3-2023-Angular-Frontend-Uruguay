import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountDataComponent } from './update-account-data.component';

describe('UpdateAccountDataComponent', () => {
  let component: UpdateAccountDataComponent;
  let fixture: ComponentFixture<UpdateAccountDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccountDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccountDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
