import { NgModule } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import { GuidePage } from './guide';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    GuidePage,
  ],
  imports: [
    IonicModule,
    // .forChild(GuidePage),
    RouterModule.forChild([{path: '', component: GuidePage}] ),
  ],
})
export class GuidePageModule {}
