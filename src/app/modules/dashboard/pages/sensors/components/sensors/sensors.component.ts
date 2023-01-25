import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { Sensor } from 'src/app/modules/services/interfaces/sensors.interface';
import { SensorsService } from 'src/app/modules/services/sensors.service';
import { ConfirmationService } from 'primeng/api';

const TEMPERATURE_LIMIT = 100;

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  displayAlert: boolean = false;
  sensors: Sensor[] = [];
  public sensor: Sensor = {
    id: '',
    serial: 0,
    area: '',
    coordenadas_latitud: '',
    coordenadas_longitud: '',
    temperatura: 0
  };

  public isOpen: boolean = false;
  public isOpenA: boolean = false;
  private canEdit: boolean = false;
  sensorsHighTemperature: Sensor[] = [];
  // public sensorsHighTemperature: Sensor = {
  //   id: '',
  //   serial: 0,
  //   area: '',
  //   coordenadas_latitud: '',
  //   coordenadas_longitud: '',
  //   temperatura: 0
  // };

  showAlertDialog() {
    this.displayAlert = true;
    this.sensorsHighTemperature = [];
  }
  constructor(
    private sensorsService: SensorsService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService
  ) {
    this.sensors = [];
  }

  ngOnInit(): void {
    this.getSensors();
  }

  private getSensors(): void {
    this.sensorsService.getSensors().subscribe((sensors) => {
      this.sensors = sensors.data;

      this.sensorsHighTemperature = this.sensors.filter(sensor => sensor.temperatura > TEMPERATURE_LIMIT);

      if (this.sensorsHighTemperature.length > 0) {
        this.isOpenA = true;
        this.showAlertDialog();
        console.log(this.sensorsHighTemperature);

      }
      // if (this.sensor.temperatura > TEMPERATURE_LIMIT) {
      //   this.isOpenA = true;
      //   this.showAlertDialog();

      // }

    });
  }

  public showFormDialog(sensor?: Sensor): void {
    this.isOpen = true;

    if (sensor) {
      this.sensor = sensor;
      this.canEdit = true;

      return;
    }

    this.canEdit = false;
  }

  public saveOrEdit(sensor: Sensor): void {
    this.canEdit ? this.updateSensor(sensor) : this.createSensor(sensor);
  }

  private updateSensor(sensor: Sensor) {
    this.sensorsService.updateSensor(sensor).subscribe((response) => {
      if (response.status) {
        this.toastService.showSuccess('Sensor actualizado');

        this.getSensors();
        this.isOpen = false;
      }
    });
  }

  private createSensor(sensor: Sensor) {
    this.sensorsService.createSensor(sensor).subscribe((response) => {
      if (response.status) {
        this.toastService.showSuccess('Sensor creado');

        this.getSensors();
        this.isOpen = false;
      }
    });
  }

  public showConfirmDialog(sensor: Sensor): void {
    this.confirmationService.confirm({
      message: '¿Estás seguro?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteSensor(sensor.id);
      },
    });
  }

  private deleteSensor(id: string): void {
    this.sensorsService.deleteSensor(id).subscribe((response) => {
      if (response.status) {
        this.toastService.showSuccess('Sensor borrado');

        this.sensors = this.sensors.filter((sensor) => sensor.id !== id);
      }
    });
  }
}
