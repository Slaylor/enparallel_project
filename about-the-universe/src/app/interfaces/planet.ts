import { PlanetDetails } from "./planet-details";

export interface Planet {
    count: number;
    next: string;
    previous: string;
    results: PlanetDetails[];
}
