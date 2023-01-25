import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateHistoriesComponent } from './form-create-histories.component';

describe('FormCreateHistoriesComponent', () => {
  let component: FormCreateHistoriesComponent;
  let fixture: ComponentFixture<FormCreateHistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateHistoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
