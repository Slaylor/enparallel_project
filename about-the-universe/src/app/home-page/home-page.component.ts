import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Planets: any = [];
  People: any = [];
  Starships: any = [];

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
      .subscribe(data => {
        this.Planets = data;
      })
  }

  getPeople() {
    this.httpService
      .get('https://swapi.dev/api/people')
      .subscribe(data => {
        this.People = data;
      })
  }

  getStarships() {
    this.httpService
      .get('https://swapi.dev/api/starships')
      .subscribe(data => {
        this.Starships = data;
      })
  }
}
