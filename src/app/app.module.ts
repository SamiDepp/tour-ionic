import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';

import { AboutPage } from './about/about';
import { ContactPage } from './contact/contact';
import { HomePage } from './home/home';
import { TabsPage } from './tabs/tabs';
import { GuidePage } from './guide/guide';
import { HotelsPage } from './hotels/hotels';
import { TripPage } from './trip/trip';

import {GoogleMapComponent} from './google-map/google-map';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {RouteReuseStrategy} from '@angular/router';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { GoogleMaps } from '@ionic-native/google-maps';
import {SplashScreen} from '@ionic-native/splash-screen';



const firebaseAuth = {
  apiKey: 'AIzaSyDBTmTcZ9UP84Bc2aJvPj6XMPx0GLEthXU',
  authDomain: 'tourism-fc983.firebaseapp.com',
  databaseURL: 'https://tourism-fc983.firebaseio.com',
  projectId: 'tourism-fc983',
  storageBucket: 'tourism-fc983.appspot.com',
  messagingSenderId: '23590154204'
};

@NgModule({
  declarations: [
    AppComponent,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
   //  GuidePage,
   //  HotelsPage,
   //  TripPage,
   GoogleMapComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    // AngularFireModule.initializeApp(firebaseAuth)
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AppComponent,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GuidePage,
    HotelsPage,
    TripPage

  ],
  providers: [
    Geolocation,
    GoogleMaps,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // statusbar,
    // SplashScreen,
    // Geolocation,
    // {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
