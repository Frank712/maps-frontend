import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Place} from '../../interfaces/place';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  map: google.maps.Map;
  markers: google.maps.Marker[] = [];

  places: Place[] = [
    {
      name: 'Udemy',
      lat: 37.784679,
      lng: -122.395936
    },
    {
      name: 'Bahía de San Francisco',
      lat: 37.798933,
      lng: -122.377732
    },
    {
      name: 'The Palace Hotel',
      lat: 37.788578,
      lng: -122.401745
    }
  ];

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    const lat_long = new google.maps.LatLng( 37.784679, -122.395936 );
    const optionsMap: google.maps.MapOptions = {
      center: lat_long,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map( this.mapElement.nativeElement, optionsMap );
    for ( const place of this.places ){
      this.addMarker( place )
    }
  }

  addMarker( marker: Place ) {
    console.log(marker);
    const lat_long = new google.maps.LatLng( marker.lat, marker.lng );
    const gen_marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: lat_long,
      draggable: true
    });
    this.markers.push(gen_marker);
  }

}
