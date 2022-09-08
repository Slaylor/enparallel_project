import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Planet } from 'src/interfaces/planet';
import { People } from 'src/interfaces/people';
import { Starship } from 'src/interfaces/starship';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Planets: Planet[] = [];
  People: People[] = [];
  Starships: Starship[] = [];

  constructor(private httpService:HttpClient) {
  }

  ngOnInit(): void {
    this.getPlanets();
    this.getPeople();
    this.getStarships();
  }

  getPlanets() {
    this.httpService
      .get('https://swapi.dev/api/planets')
      .subscribe((data: any) => {
        this.Planets = data;
      })
  }

  getPeople() {
    this.httpService
      .get('https://swapi.dev/api/people')
      .subscribe((data: any) => {
        this.People = data;
      })
  }

  getStarships() {
    this.httpService
      .get('https://swapi.dev/api/starships')
      .subscribe((data: any) => {
        this.Starships = data;
      })
  }
}
