import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ToastService } from 'src/app/core/services/toast.service';
import { Suggestion } from 'src/app/modules/services/interfaces/suggestions.interface';
import { SuggestionsService } from 'src/app/modules/services/suggestions.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  suggestions: Suggestion[] = [];

  public suggestion: Suggestion = {
    id: '',
    area: '',
    coordenadas_latitud: '',
    coordenadas_longitud: '',
    comentario: ''
  };

  public isOpen: boolean = false;
  public isOpenA: boolean = false;
  private canEdit: boolean = false;

  constructor(
    private suggestionsService: SuggestionsService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService
  ) {
    this.suggestions = [];
  }

  ngOnInit(): void {
    this.getSuggestion();
  }

  private getSuggestion(): void {
    this.suggestionsService.getSuggestion().subscribe((suggestions) => {
      this.suggestions = suggestions.data;
      console.log(suggestions);
    });
  }

  public showFormDialog(suggestion?: Suggestion): void {
    this.isOpen = true;

    if (suggestion) {
      this.suggestion = suggestion;
      this.canEdit = true;

      return;
    }

    this.canEdit = false;
  }

  public saveOrEdit(suggestion: Suggestion): void {
    this.canEdit ? this.updateSuggestion(suggestion) : this.createSuggestion(suggestion);
  }

  private updateSuggestion(suggestion: Suggestion) {
    this.suggestionsService.updateSuggestion(suggestion).subscribe((response) => {
      if (response.status) {
        this.toastService.showSuccess('Suggerencia actualizada');

        this.getSuggestion();
        this.isOpen = false;
      }
    });
  }

  private createSuggestion(suggestion: Suggestion) {
    this.suggestionsService.createSuggestion(suggestion).subscribe((response) => {
      if (response.status) {
        this.toastService.showSuccess('Sugerencia creada');

        this.getSuggestion();
        this.isOpen = false;
      }
    });
  }

  public showConfirmDialog(suggestion: Suggestion): void {
    this.confirmationService.confirm({
      message: '¿Estás Seguro?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteSuggestion(suggestion.id);
      },
    });
  }

  private deleteSuggestion(id: string): void {
    this.suggestionsService.deleteSuggestion(id).subscribe((response) => {
      if (response.status) {
        this.toastService.showSuccess('Sugerencia borrada');

        this.suggestions = this.suggestions.filter((suggestion) => suggestion.id !== id);
      }
    });
  }

}
