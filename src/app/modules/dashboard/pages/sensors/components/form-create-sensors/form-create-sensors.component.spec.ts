import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateSensorsComponent } from './form-create-sensors.component';

describe('FormCreateSensorsComponent', () => {
  let component: FormCreateSensorsComponent;
  let fixture: ComponentFixture<FormCreateSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateSensorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
