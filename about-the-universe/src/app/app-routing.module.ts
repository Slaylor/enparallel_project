import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {IndexShowPlanetsComponent} from "./index-show-planets/index-show-planets.component";

const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'index-show-planets', component: IndexShowPlanetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
