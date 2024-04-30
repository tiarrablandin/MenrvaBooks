import { BookResponse } from "./book";
import { User } from "./user";

export interface Comment {
    id: number;
    comment: string;
    reviewed: boolean;
    dateAdded: Date;
    dateUpdated: Date;
    user: User;
    book: BookResponse;
}