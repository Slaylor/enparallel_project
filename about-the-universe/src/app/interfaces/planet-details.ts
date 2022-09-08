import { PeopleDetails } from "./people-details";

export interface PlanetDetails {
    climate: string;
    diameter: string;
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: PeopleDetails[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
}
