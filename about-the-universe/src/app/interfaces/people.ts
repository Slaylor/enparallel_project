import { PeopleDetails } from "./people-details";

export interface People {
    count: number;
    next: string;
    previous: string;
    results: PeopleDetails[];
}
