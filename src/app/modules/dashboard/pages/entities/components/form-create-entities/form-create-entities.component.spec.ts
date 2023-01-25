import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateEntitiesComponent } from './form-create-entities.component';

describe('FormCreateEntitiesComponent', () => {
  let component: FormCreateEntitiesComponent;
  let fixture: ComponentFixture<FormCreateEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateEntitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
