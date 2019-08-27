import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TripPage } from '../trip/trip';
import { GuidePage } from '../guide/guide';
import { HotelsPage } from '../hotels/hotels';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TripPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = GuidePage;
  tab5Root = HotelsPage;

  constructor() {

  }
}

