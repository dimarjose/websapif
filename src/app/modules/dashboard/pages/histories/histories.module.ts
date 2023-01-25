import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HistoriesComponent } from './components/histories/histories.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastService } from '../../../../core/services/toast.service';
import { FormCreateHistoriesComponent } from './components/form-create-histories/form-create-histories.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HistoriesComponent,
    FormCreateHistoriesComponent
  ],
  imports: [
    CommonModule,
    HistoriesRoutingModule,
    TableModule,
    ButtonModule,
    CardModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [MessageService, ConfirmationService, ToastService]
})
export class HistoriesModule { }
