import { BookResponse } from "@/data/BookResponse";
import { ADD_BOOKS_TO_NEW_RELEASES } from "../types/ActionTypes";

interface AddBooksToNewReleases{
  type: typeof ADD_BOOKS_TO_NEW_RELEASES;
  payload: {
    books: BookResponse[];
  }
}

export type BooksActionTypes = AddBooksToNewReleases;