import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-kit-ui',
  templateUrl: './kit-ui.component.html',
  styleUrls: ['./kit-ui.component.css']
})
export class KitUiComponent implements OnInit {
  nbPlanets: number = 0;

  constructor(private httpService:HttpClient) {
  }

  ngOnInit(): void {
    this.getNbPlanets();
  }
  getNbPlanets() {
    this.httpService
      .get('https://swapi.dev/api/planets')
      .subscribe(data => {
        console.log(data['count']);
      })

  }
}
