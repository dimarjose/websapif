import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';
import { CoreModule } from '../../core/core.module';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    LayoutDashboardComponent,
    BannerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    DialogModule,
    ButtonModule,
    ConfirmDialogModule,
  ]
})
export class DashboardModule { }
