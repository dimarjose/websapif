import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateSuggestionsComponent } from './form-create-suggestions.component';

describe('FormCreateSuggestionsComponent', () => {
  let component: FormCreateSuggestionsComponent;
  let fixture: ComponentFixture<FormCreateSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
