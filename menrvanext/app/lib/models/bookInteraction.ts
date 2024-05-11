import { BookResponse } from "./book";
import { User } from "./user";

interface BookInteractionId { userId: number; bookId: number }

export interface BookInteraction {
    id: BookInteractionId;
    interested: boolean;
    hasRead: boolean;
    favorite: boolean;
    likeDislike: number;
    book: BookResponse;
    // user: User;
}