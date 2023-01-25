import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorsComponent } from './components/sensors/sensors.component';
import { LayoutComponent } from './components/layout/layout.component';

// const routes: Routes = [{ path: '', component: SensorsComponent }];
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: SensorsComponent,
      },
      {
        path: 'map',
        loadChildren: () => import('./components/map/map.module').then(m => m.MapModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorsRoutingModule { }
