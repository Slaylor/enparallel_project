import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-show-planets',
  templateUrl: './index-show-planets.component.html',
  styleUrls: ['./index-show-planets.component.css']
})
export class IndexShowPlanetsComponent implements OnInit {
  planets = [];
  constructor() { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets() {

  }

}
