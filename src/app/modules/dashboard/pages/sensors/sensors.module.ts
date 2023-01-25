import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorsRoutingModule } from './sensors-routing.module';
import { SensorsComponent } from './components/sensors/sensors.component';
import { FormCreateSensorsComponent } from './components/form-create-sensors/form-create-sensors.component';
import { TableModule } from 'primeng/table';
import { MapComponent } from './components/map/map.component';
import { ButtonModule } from 'primeng/button';
import { LayoutComponent } from './components/layout/layout.component';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { GMapModule } from 'primeng/gmap';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastService } from '../../../../core/services/toast.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AlertComponent } from '../alert/alert.component';

@NgModule({
  declarations: [
    SensorsComponent,
    FormCreateSensorsComponent,
    LayoutComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    SensorsRoutingModule,
    TableModule,
    ButtonModule,
    CardModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    GMapModule,
    ConfirmDialogModule,
    ToastModule,
    ReactiveFormsModule,
  ],
  providers: [MessageService, ConfirmationService, ToastService]
})
export class SensorsModule { }
