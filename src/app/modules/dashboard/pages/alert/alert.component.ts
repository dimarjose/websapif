import { Component, Input, OnInit, Output } from '@angular/core';
import { Sensor } from 'src/app/modules/services/interfaces/sensors.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() sensor!: Sensor;
  @Input() isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  public hideDialog(): void {
    this.isOpen = false;
  }



}
