import { Author } from "./author";
import { BookResponse } from "./book";
import { BookInteraction } from "./bookInteraction";
import { Subscription } from "./subscription";
import { Comment } from "./comment";

export interface User {
    id: number;
    role: string;
    firstName: string;
    lastName: string;
    tag: string;
    email: string;
    password: string;
    active: boolean;
    dateAdded: Date;
    dateUpdated: Date;
    
    subscription: Subscription;
    bookInteractions: BookInteraction[];
    hasReadBooks?: BookResponse[];
    likedBooks?: BookResponse[];
    tbrBooks?: BookResponse[];
    author?: Author[];
    comments?: Comment[];
}