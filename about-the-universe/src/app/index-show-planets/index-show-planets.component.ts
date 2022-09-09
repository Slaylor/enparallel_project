import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Planet } from '../interfaces/planet';
import { PlanetDetails } from '../interfaces/planet-details';

@Component({
  selector: 'app-index-show-planets',
  templateUrl: './index-show-planets.component.html',
  styleUrls: ['./index-show-planets.component.css']
})
export class IndexShowPlanetsComponent implements OnInit {

  @Input() query?: string;

  planets: Planet[] = [];
  planetsCount!: number;

  constructor(private httpService:HttpClient) { }

  ngOnInit(): void {
    this.getPlanets()
  }

  getPlanets() {
    this.httpService
      .get<PlanetDetails>('https://swapi.dev/api/planets')
      .subscribe(data => {
        this.planets = data.results
        this.planetsCount = data.count;
      })
  }

  showPlanet(planet: Planet) {
    
  }

}
