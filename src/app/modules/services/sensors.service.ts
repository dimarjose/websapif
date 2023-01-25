import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sensor } from './interfaces/sensors.interface';
import { Response } from './interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(private http: HttpClient) { }

  getSensors(id = ''): Observable<Response<Sensor[]>> {
    return this.http.get<Response<Sensor[]>>(
      `${environment.apiUrl}/sensors?id=${id}`
    );
  }

  createSensor(sensor: Sensor): Observable<Response<Sensor>> {
    return this.http.post<Response<Sensor>>(
      `${environment.apiUrl}/sensors`, sensor
    );
  }

  updateSensor(sensor: Sensor): Observable<Response<Sensor>> {
    return this.http.put<Response<Sensor>>(
      `${environment.apiUrl}/sensors`, sensor
    );
  }

  deleteSensor(id: string): Observable<Response<Sensor>> {
    return this.http.delete<Response<Sensor>>(
      `${environment.apiUrl}/sensors`,
      {
        body: { id },
      }
    )
  }
}
