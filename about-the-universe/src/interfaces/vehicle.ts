import { VehicleDetails } from "./vehicle-details";

export interface Vehicle {
    count: number;
    next: string;
    previous: string;
    results: VehicleDetails[];
}
