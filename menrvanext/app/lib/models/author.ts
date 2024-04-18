import { User } from "./user";

export interface Author {
    id: number;
    photo: string; 
    penName: string;
    bio: string;
    text: string;
    dateAdded: Date;
    dateUpdated: Date;
    reviewed: boolean;
    user: User | null;
}