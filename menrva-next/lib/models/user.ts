import { BookResponse } from "./book";
import { BookInteraction } from "./bookInteraction";
import { Subscription } from "./subscription";

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
}

export interface AddUserRequest {
    role: string;
    firstName: string;
    lastName: string;
    tag: string;
    email: string;
    password: string;
    active: boolean;

    // subscription: Subscription;
}

export interface UpdateUserRequest {
    role: string;
    firstName: string;
    lastName: string;
    tag: string;
    email: string;
    password: string;
    active: boolean;

    subscription: Subscription;
    bookInteractions: BookInteraction[];
    hasReadBooks?: BookResponse[];
    likedBooks?: BookResponse[];
    tbrBooks?: BookResponse[];
}
export interface SimpleUpdateUserRequest {
    role: string;
    firstName: string;
    lastName: string;
    tag: string;
    email: string;
}