import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleDocumentTypeComponent } from './handle-document-type.component';

describe('HandleDocumentTypeComponent', () => {
  let component: HandleDocumentTypeComponent;
  let fixture: ComponentFixture<HandleDocumentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleDocumentTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleDocumentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
