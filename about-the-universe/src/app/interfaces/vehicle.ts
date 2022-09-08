import { People } from "./people";

export interface Vehicle {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: number;
    crew: number;
    passengers: number;
    cargo_capicity: number;
    consumables: number;
    vehicle_class: string;
    pilots: People[];
    url: string;
}
