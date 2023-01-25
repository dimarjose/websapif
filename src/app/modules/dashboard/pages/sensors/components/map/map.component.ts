import { Component, OnInit } from '@angular/core';
import { Sensor } from 'src/app/modules/services/interfaces/sensors.interface';
import { SensorsService } from 'src/app/modules/services/sensors.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  options: any;
  overlays: any[] = [];

  sensors: Sensor[] = [];
  public sensor: Sensor = {
    id: '',
    serial: 0,
    area: '',
    coordenadas_latitud: '',
    coordenadas_longitud: '',
    temperatura: 0
  }


  ngOnInit() {
    this.options = {
      center: { lat: 4.289897210861208, lng: -72.31629885467436 },
      zoom: 6
    };
    this.getCoordenadas();

    this.overlays = [
      new google.maps.Marker({ position: { lat: -3.5529815477525717, lng: -67.63027229378044 }, title: "1000312" }),
      new google.maps.Marker({ position: { lat: 8.367034429613401, lng: -73.19951582243577 }, title: "1000739" }),
      new google.maps.Marker({ position: { lat: 8.330000920042657, lng: -73.20541448721595 }, title: "150412" }),
      new google.maps.Marker({ position: { lat: -2.09413846087503, lng: -70.88310572999706 }, title: "100220" }),
      new google.maps.Marker({ position: { lat: -3.007927542823499, lng: -71.92329610887211 }, title: "1390832" }),
    ];
  }
  constructor(
    private sensorsService: SensorsService
  ) {
    this.sensors = [];
  }

  // zoomIn(map: { setZoom: (arg0: any) => void; getZoom: () => number; }): void {
  //   map.setZoom(map.getZoom() + 50);
  // }

  private getCoordenadas(): void {
    this.sensorsService.getSensors().subscribe((sensors) => {
      this.sensors = sensors.data;
      console.log(sensors);

    })
  }
}
