import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'guide', loadChildren: './guide/guide.module#GuidePageModule' },
    { path: 'hotels', loadChildren: './hotels/hotels.module#HotelsPageModule' },
    { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
    { path: 'trip', loadChildren: './trip/trip.module#TripPageModule' },
    { path: 'vehicle', loadChildren: './vehicle/vehicle.module#VehiclePageModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
