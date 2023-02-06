import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransaccionComponent } from './new-transaccion.component';

describe('NewTransaccionComponent', () => {
  let component: NewTransaccionComponent;
  let fixture: ComponentFixture<NewTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTransaccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
