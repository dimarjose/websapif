import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { FormCreateSuggestionsComponent } from './components/form-create-suggestions/form-create-suggestions.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastService } from '../../../../core/services/toast.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SuggestionsComponent,
    FormCreateSuggestionsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    TableModule,
    ButtonModule,
    CardModule,
    DialogModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [MessageService, ConfirmationService, ToastService]
})
export class SuggestionsModule { }
