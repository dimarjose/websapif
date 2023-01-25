import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'sensors',
        loadChildren: () =>
          import('./pages/sensors/sensors.module').then(
            (m) => m.SensorsModule
          ),
      },
      {
        path: 'histories',
        loadChildren: () =>
          import('./pages/histories/histories.module').then(
            (m) => m.HistoriesModule
          ),
      },
      {
        path: 'entities',
        loadChildren: () =>
          import('./pages/entities/entities.module').then(
            (m) => m.EntitiesModule
          ),
      },
      {
        path: 'suggestions',
        loadChildren: () =>
          import('./pages/suggestions/suggestions.module').then(
            (m) => m.SuggestionsModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./pages/about/about.module').then(
            (m) => m.AboutModule
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
