import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AgmCoreModule } from '@agm/core';
import { GMapModule } from 'primeng/gmap';
import { MapComponent } from './map.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { GoogleMapsModule } from '@angular/google-maps';
// import { AlertComponent } from '../../../../alert/alert.component';
import { MapRoutingModule } from './map-routing.module';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    MapComponent,
    // AlertComponent
  ],
  imports: [
    CommonModule,
    GMapModule,
    CheckboxModule,
    ButtonModule,
    DialogModule,
    ToastModule,
    AccordionModule,
    MapRoutingModule,
    CardModule
    // GoogleMapsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDeQkFJT5hW4iR_STVv-4_uI5dZc0-RJAM'
    // })
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
