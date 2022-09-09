import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-index-planets',
  templateUrl: './index-planets.component.html',
  styleUrls: ['./index-planets.component.css']
})
export class IndexPlanetsComponent implements OnInit {

  @Output() sendPlanetToParent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  sendPlanet(planet: any) {
    this.sendPlanetToParent.emit(planet)
  }

}
