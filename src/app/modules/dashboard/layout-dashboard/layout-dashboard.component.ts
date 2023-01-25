import { Component, OnInit, ViewChild } from '@angular/core';
import { BannerComponent } from '../../../core/components/banner/banner.component';

@Component({
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.component.html',
  styleUrls: ['./layout-dashboard.component.css']
})
export class LayoutDashboardComponent implements OnInit {

  @ViewChild(BannerComponent) banner!: BannerComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
