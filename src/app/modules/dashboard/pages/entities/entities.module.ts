import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { FormCreateEntitiesComponent } from './components/form-create-entities/form-create-entities.component';
import { EntitiesComponent } from './components/entities/entities.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastService } from 'src/app/core/services/toast.service';


@NgModule({
  declarations: [
    FormCreateEntitiesComponent,
    EntitiesComponent
  ],
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    CardModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [MessageService, ConfirmationService, ToastService]

})
export class EntitiesModule { }
