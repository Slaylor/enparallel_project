import { People } from "./people";

export interface Planet {
    climate: string;
    diameter: string;
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: People[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
}
