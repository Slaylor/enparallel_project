import { Vehicle } from "./vehicle";

export interface VehicleDetails {
    count: number;
    next: string;
    previous: string;
    results: Vehicle[];
}
