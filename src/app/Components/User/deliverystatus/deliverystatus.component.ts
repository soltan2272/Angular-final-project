import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare const google:any;

@Component({
  selector: 'app-deliverystatus',
  templateUrl: './deliverystatus.component.html',
  styleUrls: ['./deliverystatus.component.scss']
})
export class DeliverystatusComponent implements OnInit,AfterViewInit {

  map:any;

  @ViewChild("mapElement")mapElement:any;
  constructor() { }
  ngAfterViewInit(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement , {
      center: { lat: 26.8206, lng: 30.8025 },
      zoom: 8,
    });
  }

  ngOnInit(): void {
  }

}
