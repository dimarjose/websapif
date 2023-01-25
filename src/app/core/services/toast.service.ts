import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  public showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: '¡Exito!',
      detail: message,
      life: 3000,
    });
  }

  public showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 3000,
    });
  }

  public showInfo(message: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: message,
      life: 3000,
    });
  }

  public showWarn(message: string) {
    this.messageService.add({
      severity: 'warn',
      summary: '¡Cuidado!',
      detail: message,
      life: 3000,
    });
  }
}
