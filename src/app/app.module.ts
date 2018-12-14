import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TabRoutingModule,
    TabMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
