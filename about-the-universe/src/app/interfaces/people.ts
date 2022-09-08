import { Vehicle } from "./vehicle";
import { Starship } from "./starship";

export interface People {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    vehicles: Vehicle[];
    starships: Starship[];
    url: string;
}
