import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularSplitModule } from 'angular-split';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LayoutParkingComponent } from './layout-parking/layout-parking.component';
import { MeterialModule } from './meterial/meterial.module';
@NgModule({
  declarations: [
   
    AppComponent,
   
    LayoutParkingComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AngularSplitModule,
    FlexLayoutModule,
    MeterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
