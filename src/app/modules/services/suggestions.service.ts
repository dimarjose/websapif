import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Suggestion } from './interfaces/suggestions.interface';
import { Response } from './interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  constructor(private http: HttpClient) { }

  getSuggestion(id = ''): Observable<Response<Suggestion[]>> {
    return this.http.get<Response<Suggestion[]>>(
      `${environment.apiUrl}/suggestions?id=${id}`
    );
  }

  createSuggestion(suggestion: Suggestion): Observable<Response<Suggestion>> {
    return this.http.post<Response<Suggestion>>(
      `${environment.apiUrl}/suggestions`, suggestion
    );
  }

  updateSuggestion(suggestion: Suggestion): Observable<Response<Suggestion>> {
    return this.http.put<Response<Suggestion>>(
      `${environment.apiUrl}/suggestions`, suggestion
    );
  }

  deleteSuggestion(id: string): Observable<Response<Suggestion>> {
    return this.http.delete<Response<Suggestion>>(
      `${environment.apiUrl}/suggestions`,
      {
        body: { id },
      }
    )
  }
}
