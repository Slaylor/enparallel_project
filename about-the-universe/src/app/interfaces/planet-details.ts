import { Planet } from "./planet";

export interface PlanetDetails {
    count: number;
    next: string;
    previous: string;
    results: Planet[];
}
