import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Planet } from '../interfaces/planet';
import { People } from '../interfaces/people';
import { Starship } from '../interfaces/starship';

import { PlanetDetails } from '../interfaces/planet-details';
import { PeopleDetails } from '../interfaces/people-details';
import { StarshipDetails } from '../interfaces/starship-details';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  planets: Planet[] = [];
  people: People[] = [];
  starships: Starship[] = [];

  planetsCount!: number;
  peopleCount!: number;
  starshipsCount!: number;

  constructor(private httpService:HttpClient) {
  }

  ngOnInit(): void {
    this.getPlanets();
    this.getPeople();
    this.getStarships();
  }

  getPlanets() {
    this.httpService
      .get<PlanetDetails>('https://swapi.dev/api/planets')
      .subscribe(data => {
        this.planets = data.results;
        this.planetsCount = data.count;
      })
  }

  getPeople() {
    this.httpService
      .get<PeopleDetails>('https://swapi.dev/api/people')
      .subscribe(data => {
        this.people = data.results;
        this.peopleCount = data.count;
      })
  }

  getStarships() {
    this.httpService
      .get<StarshipDetails>('https://swapi.dev/api/starships')
      .subscribe(data => {
        this.starships = data.results;
        this.starshipsCount = data.count;
      })
  }
}
