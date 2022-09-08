import { PeopleDetails } from "./people-details";

export interface StarshipDetails {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: string;
    crew: number;
    passengers: number;
    cargo_capicity: number;
    consumables: string;
    hyperdrive_rating: number;
    MGLT: number;
    starship_class: string;
    pilots: PeopleDetails[];
    url: string;
}
