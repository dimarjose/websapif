import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Historie } from './interfaces/histories.interface';
import { Response } from './interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoriesService {

  constructor(private http: HttpClient) { }

  getHistorie(id = ''): Observable<Response<Historie[]>> {
    return this.http.get<Response<Historie[]>>(
      `${environment.apiUrl}/histories?id=${id}`
    );
  }

  createHistorie(historie: Historie): Observable<Response<Historie>> {
    return this.http.post<Response<Historie>>(
      `${environment.apiUrl}/histories`, historie
    )
  }

  updateHistorie(historie: Historie): Observable<Response<Historie>> {
    return this.http.put<Response<Historie>>(
      `${environment.apiUrl}/histories`, historie
    )
  }

  deleteHistorie(id: string): Observable<Response<Historie>> {
    return this.http.delete<Response<Historie>>(
      `${environment.apiUrl}/histories`,
      {
        body: { id },
      }
    )
  }
}
