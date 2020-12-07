import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDesigComponent } from './add-edit-desig.component';

describe('AddEditDesigComponent', () => {
  let component: AddEditDesigComponent;
  let fixture: ComponentFixture<AddEditDesigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDesigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDesigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
