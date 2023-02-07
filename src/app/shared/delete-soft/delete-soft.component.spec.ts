import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSoftComponent } from './delete-soft.component';

describe('DeleteSoftComponent', () => {
  let component: DeleteSoftComponent;
  let fixture: ComponentFixture<DeleteSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
