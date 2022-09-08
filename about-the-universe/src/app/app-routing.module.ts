import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import { KitUiComponent } from './kit-ui/kit-ui.component';
import { IndexShowPlanetsComponent } from './index-show-planets/index-show-planets.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'index-show-planets', component: IndexShowPlanetsComponent},
  {path: 'kit-ui', component: KitUiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
