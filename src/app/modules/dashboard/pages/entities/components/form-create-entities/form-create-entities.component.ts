import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Entitie } from 'src/app/modules/services/interfaces/entities.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-entities',
  templateUrl: './form-create-entities.component.html',
  styleUrls: ['./form-create-entities.component.css']
})
export class FormCreateEntitiesComponent implements OnInit {
  @Input() entitie!: Entitie;
  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<Entitie>();

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadForm();
  }

  ngOnChanges(): void {
    this.form.patchValue(this.entitie)
  }

  private loadForm(): void {
    this.form = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: [''],
      email: ['', [Validators.required]]
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
    this.entitie = {} as Entitie;
  }

}
