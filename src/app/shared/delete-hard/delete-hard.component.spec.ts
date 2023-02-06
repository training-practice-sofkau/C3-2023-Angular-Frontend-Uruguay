import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHardComponent } from './delete-hard.component';

describe('DeleteHardComponent', () => {
  let component: DeleteHardComponent;
  let fixture: ComponentFixture<DeleteHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
