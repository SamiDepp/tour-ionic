import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from '@ionic-native/google-maps/ngx';


@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  // query results available in ngOnInit => static true , OR
  // query results available in ngAfterViewInit
  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: GoogleMap;


  constructor(public googleMaps: GoogleMaps, public platform: Platform,
              public nav: NavController) { }

  ionViewDidEnter() {
    console.log('call ionViewDidLoad');
    this.platform.ready().then(() => {
      this.initMap();
    });
  }


  initMap() {
    this.map = GoogleMaps.create(this.mapElement.nativeElement);

    this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      let coordinates: LatLng = new LatLng(7.8956, 80.3847);
      let position = {
        target: coordinates,
        zoom: 17
      };
      this.map.animateCamera(position);
      let markerOptions: MarkerOptions = {
        position: coordinates,
        // icon: "../../assets/images/icons8-Marker-64.png",
        title: 'Greensboro, NC'
      };
      const marker = this.map.addMarker(markerOptions)
        .then((marker: Marker) => {
          marker.showInfoWindow();
        });
    });
  }

}
