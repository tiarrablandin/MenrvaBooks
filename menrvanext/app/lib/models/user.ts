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
}