import { VehicleDetails } from "./vehicle-details";
import { StarshipDetails } from "./starship-details";

export interface PeopleDetails {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    vehicles: VehicleDetails[];
    starships: StarshipDetails[];
    url: string;
}
