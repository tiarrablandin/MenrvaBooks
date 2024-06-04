import { Author } from "./author";
import { BookResponse } from "./book";

export interface Series {
    id: number;
    name: string;
    reviewed: boolean;
    dateAdded: Date;
    dateUpdated: Date;
    authors: Author[];
    books: BookResponse[];
}