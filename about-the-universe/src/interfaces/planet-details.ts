import { PeopleDetails } from "./people-details";

export interface PlanetDetails {
    climate: string;
    diameter: number;
    gravity: string;
    name: string;
    orbital_period: number;
    population: number;
    residents: PeopleDetails[];
    rotation_period: number;
    surface_water: number;
    terrain: string;
    url: string;
}
