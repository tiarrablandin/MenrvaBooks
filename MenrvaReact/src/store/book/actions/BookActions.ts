import { BookResponse } from "@/data/BookResponse";
import { ADD_BOOKS_TO_NEW_RELEASES, SET_SEARCH_RESULTS } from "../types/ActionTypes";

interface AddBooksToNewReleases{
  type: typeof ADD_BOOKS_TO_NEW_RELEASES;
  payload: {
    books: BookResponse[];
  }
}

interface SetSearchResults{
  type: typeof SET_SEARCH_RESULTS;
  payload: {
    books: BookResponse[];
  }
}

export type BooksActionTypes = AddBooksToNewReleases | SetSearchResults;