import { Starship } from "./starship";

export interface StarshipDetails {
    count: number;
    next: string;
    previous: string;
    results: Starship[];
}
