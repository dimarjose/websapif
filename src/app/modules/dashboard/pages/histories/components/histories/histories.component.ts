import { Component, OnInit } from '@angular/core';
import { Historie } from 'src/app/modules/services/interfaces/histories.interface';
import { ConfirmationService } from 'primeng/api';
import { ToastService } from '../../../../../../core/services/toast.service';
import { HistoriesService } from 'src/app/modules/services/histories.service';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.css']
})
export class HistoriesComponent implements OnInit {

  histories: Historie[] = [];

  public historie: Historie = {
    id: '',
    serial: 0,
    area: '',
    coordenadas_latitud: '',
    coordenadas_longitud: '',
    temperatura: 0,
    comentario: '',
  }

  public isOpen: boolean = false;
  private canEdit: boolean = false;

  constructor(
    private historiesService: HistoriesService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService
  ) {
    this.histories = [];
  }

  ngOnInit(): void {
    this.getHistorie();
  }

  private getHistorie(): void {
    this.historiesService.getHistorie().subscribe((histories) => {
      this.histories = histories.data;
    });
  }

  public showFormDialog(historie?: Historie): void {
    this.isOpen = true;

    if (historie) {
      this.historie = historie;
      this.canEdit = true;
      return;
    }

    this.canEdit = false;
  }

  public saveOrEdit(historie: Historie): void {
    this.canEdit ? this.updateHistorie(historie) : this.createHistorie(historie);
  }

  private updateHistorie(historie: Historie) {
    this.historiesService.updateHistorie(historie).subscribe((response) => {
      if (response.status) {
        this.toastService.showSuccess('Historia actualizada');

        this.getHistorie();
        this.isOpen = false;
      }
    });
  }
  private createHistorie(historie: Historie) {
    this.historiesService.createHistorie(historie).subscribe((response) => {
      if (response.status) {
        this.toastService.showSuccess('Historia creada');

        this.getHistorie();
        this.isOpen = false;
      }
    });
  }

  public showConfirmDialog(historie: Historie): void {
    this.confirmationService.confirm({
      message: '¿Estás seguro?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteHistorie(historie.id);
      },
    });
  }

  private deleteHistorie(id: string): void {
    this.historiesService.deleteHistorie(id).subscribe((response) => {
      if (response.status) {
        this.toastService.showSuccess('Historia borrada');

        this.histories = this.histories.filter((historie) => historie.id !== id);
      }
    });
  }

}
