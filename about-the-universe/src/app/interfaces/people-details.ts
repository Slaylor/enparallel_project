import { People } from "./people";

export interface PeopleDetails {
    count: number;
    next: string;
    previous: string;
    results: People[];
}
