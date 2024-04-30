import { Author } from "./author";

export interface Series {
    id: number;
    name: string;
    reviewed: boolean;
    dateAdded: Date;
    dateUpdated: Date;
    authors: Author[];
}