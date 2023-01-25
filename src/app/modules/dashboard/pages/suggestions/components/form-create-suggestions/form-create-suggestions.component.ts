import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Suggestion } from 'src/app/modules/services/interfaces/suggestions.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-suggestions',
  templateUrl: './form-create-suggestions.component.html',
  styleUrls: ['./form-create-suggestions.component.css']
})
export class FormCreateSuggestionsComponent implements OnInit {
  @Input() suggestion!: Suggestion;

  @Input() isOpen: boolean = false;

  @Output() isOpenChange = new EventEmitter<boolean>();

  @Output() save = new EventEmitter<Suggestion>();

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadForm();
  }

  ngOnChanges(): void {
    this.form.patchValue(this.suggestion)
  }

  private loadForm(): void {
    this.form = this.fb.group({
      id: [''],
      area: ['', [Validators.required]],
      coordenadas_latitud: ['', [Validators.required]],
      coordenadas_longitud: ['', [Validators.required]],
      comentario: ['', [Validators.required]]
    });
  }

  public hideDialog(): void {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);

    this.resetForm();
  }

  public validateForm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.save.emit(this.form.value);
  }

  public resetForm(): void {
    this.form.reset();
    this.suggestion = {} as Suggestion;
  }

}
