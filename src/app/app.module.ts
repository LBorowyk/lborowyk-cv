import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {InfoPanelComponent} from "./components/info-panel/info-panel.component";
import {CommonPanelModule} from "./components/common/common-panel.module";

@NgModule({
  declarations: [
    AppComponent,
    InfoPanelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    CommonPanelModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
