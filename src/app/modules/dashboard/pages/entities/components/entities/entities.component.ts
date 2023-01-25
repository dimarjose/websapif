import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ToastService } from 'src/app/core/services/toast.service';
import { Entitie } from 'src/app/modules/services/interfaces/entities.interface';
import { EntitiesService } from '../../../../../services/entities.service';

@Component({
    selector: 'app-entities',
    templateUrl: './entities.component.html',
    styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit {

    entities: Entitie[] = [];
    public entitie: Entitie = {
        id: '',
        nombre: '',
        direccion: '',
        telefono: 0,
        email: ''
    };

    public isOpen: boolean = false;
    private canEdit: boolean = false;

    constructor(
        private entitiesService: EntitiesService,
        private confirmationService: ConfirmationService,
        private toastService: ToastService
    ) {
        this.entities = [];
    }

    ngOnInit(): void {
        this.getEntities();
    }

    private getEntities(): void {
        this.entitiesService.getEntities().subscribe((entities) => {
            this.entities = entities.data;
        });
    }

    public showFormDialog(entitie?: Entitie): void {
        this.isOpen = true;

        if (entitie) {
            this.entitie = entitie;
            this.canEdit = true;
            return;
        }
        this.canEdit = false;
    }

    public saveOrEdit(entitie: Entitie): void {
        this.canEdit ? this.updateEntitie(entitie) : this.createEntitie(entitie);
    }

    private updateEntitie(entitie: Entitie) {
        this.entitiesService.updateEntitie(entitie).subscribe((response) => {
            if (response.status) {
                this.toastService.showSuccess('Entidad actualizada');

                this.getEntities();
                this.isOpen = false;
            }
        });
    }

    private createEntitie(entitie: Entitie) {
        this.entitiesService.createEntitie(entitie).subscribe((response) => {
            if (response.status) {
                this.toastService.showSuccess('Entidad creada');

                this.getEntities();
                this.isOpen = false;
            }
        });

    }

    public showConfirmDialog(entitie: Entitie): void {
        this.confirmationService.confirm({
            message: '¿Estás seguro?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.deleteEntitie(entitie.id);
            },
        });
    }

    private deleteEntitie(id: string): void {
        this.entitiesService.deleteEntitie(id).subscribe((response) => {
            if (response.status) {
                this.toastService.showSuccess('Entidad eliminada');

                this.entities = this.entities.filter((entitie) => entitie.id !== id);
            }
        })
    }
}
