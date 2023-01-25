import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';

const primengModules = [
  ButtonModule,
  InputTextModule,
  ColorPickerModule,
  ToolbarModule,
  TableModule,
  FileUploadModule,
  InputSwitchModule,
  TagModule,
  CardModule,
  TooltipModule,
  DialogModule,
  InputNumberModule,
  DropdownModule,
  RadioButtonModule,
  CalendarModule,
  ConfirmDialogModule,
  ToastModule,
  CheckboxModule,
  InputTextareaModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...primengModules],
  exports: primengModules,
})
export class PrimengModule {}
