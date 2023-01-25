import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entitie } from './interfaces/entities.interface';
import { Response } from './interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  constructor(private http: HttpClient) { }

  getEntities(id = ''): Observable<Response<Entitie[]>> {
    return this.http.get<Response<Entitie[]>>(
      `${environment.apiUrl}/entities?id=${id}`
    );
  }

  createEntitie(entitie: Entitie): Observable<Response<Entitie>> {
    return this.http.post<Response<Entitie>>(
      `${environment.apiUrl}/entities`, entitie
    );
  }

  updateEntitie(entitie: Entitie): Observable<Response<Entitie>> {
    return this.http.put<Response<Entitie>>(
      `${environment.apiUrl}/entitie`, entitie
    );
  }

  deleteEntitie(id: string): Observable<Response<Entitie>> {
    return this.http.delete<Response<Entitie>>(
      `${environment.apiUrl}/entities`,
      {
        body: { id },
      }
    )
  }
}
