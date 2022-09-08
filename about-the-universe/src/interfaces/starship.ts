import { StarshipDetails } from "./starship-details";

export interface Starship {
    count: number;
    next: string;
    previous: string;
    results: StarshipDetails[];
}
