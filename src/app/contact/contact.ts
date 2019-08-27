import { Component , ViewChild , ElementRef  } from '@angular/core';
import {GeolocationOptions, Geoposition} from '@ionic-native/geolocation/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  options: GeolocationOptions;
  currentPos: Geoposition;

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: any;

  constructor(public geolocation: Geolocation) {

  }
  getUserPosition() {
    return new Promise((resolve, reject) => {
      this.options = {
        maximumAge: 3000,
        enableHighAccuracy: true
      };

      this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
        this.currentPos = pos;
        const location = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          time: new Date(),
        };
        console.log('loc', location);
        resolve(pos);
      }, (err: PositionError) => {
        console.log('error : ' + err.message);
        reject(err.message);
      });
    });
    // this.options = {
    //     enableHighAccuracy : true
    // };
    //
    // this.geolocation.getCurrentPosition(/*this.options*/).then((pos: Geoposition) => {
    //
    //     this.currentPos = pos;
    //     console.log(pos);
    //
    // }, (err: PositionError) => {
    //     console.log('error : ' + err.message);
    // });
  }

  ionViewDidEnter() {
  this.getUserPosition();
}

addMap(lat, long) {

  const latLng = new google.maps.LatLng(lat, long);

  const mapOptions = {
  center: latLng,
  zoom: 15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  this.addMarker();

}

addMarker() {

  const marker = new google.maps.Marker({
  map: this.map,
  animation: google.maps.Animation.DROP,
  position: this.map.getCenter()
  });

  const content = '<p>This is your current position !</p>';
  const infoWindow = new google.maps.InfoWindow({
  content
  });

  google.maps.event.addListener(marker, 'click', () => {
  infoWindow.open(this.map, marker);
  });

}




}
