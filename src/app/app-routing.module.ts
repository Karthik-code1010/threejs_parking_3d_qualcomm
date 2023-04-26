import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutParkingComponent } from './layout-parking/layout-parking.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutParkingComponent
  },
  {
    path:"car-parking",
    component:LayoutParkingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
