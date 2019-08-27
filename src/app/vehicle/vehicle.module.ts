import { NgModule } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import { VehiclePage } from './vehicle';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    VehiclePage,
  ],
  imports: [
    IonicModule,
    // RouterModule.forChild(routes),
  ],
})
export class VehiclePageModule {}
