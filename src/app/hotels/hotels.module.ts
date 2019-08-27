import { NgModule } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import { HotelsPage } from './hotels';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HotelsPage,
  ],
  imports: [
    IonicModule,
    RouterModule.forChild([{path: '', component: HotelsPage}] ),
  ],
})
export class HotelsPageModule {}
