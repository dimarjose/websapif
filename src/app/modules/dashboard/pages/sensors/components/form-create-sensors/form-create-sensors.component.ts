import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sensor } from 'src/app/modules/services/interfaces/sensors.interface';

@Component({
  selector: 'app-form-create-sensors',
  templateUrl: './form-create-sensors.component.html',
  styleUrls: ['./form-create-sensors.component.css']
})
export class FormCreateSensorsComponent implements OnInit, OnChanges {
  @Input() sensor!: Sensor;

  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  @Output() save = new EventEmitter<Sensor>();

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadForm();
  }

  ngOnChanges(): void {
    this.form.patchValue(this.sensor)
  }

  private loadForm(): void {
    this.form = this.fb.group({
      id: [''],
      serial: ['', [Validators.required]],
      area: ['', [Validators.required]],
      coordenadas_latitud: ['', [Validators.required]],
      coordenadas_longitud: ['', [Validators.required]],
      temperatura: ['']
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
    this.sensor = {} as Sensor;
  }
}
