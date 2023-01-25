import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @ViewChild('banner') banner!: ElementRef<HTMLDivElement | undefined>;

  constructor() { }

  ngOnInit(): void {
  }

}
