import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { KitUiComponent } from './kit-ui/kit-ui.component';
import {HttpClientModule} from "@angular/common/http";
import { IndexShowPlanetsComponent } from './index-show-planets/index-show-planets.component';
import { FormsModule } from '@angular/forms';
import { IndexPlanetsComponent } from './index-planets/index-planets.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    KitUiComponent,
    IndexShowPlanetsComponent,
    IndexPlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
