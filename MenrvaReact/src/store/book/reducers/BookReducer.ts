import { BooksActionTypes } from "../actions/BookActions";
import { BookState } from "../contexts/BookContext";
import { ADD_BOOKS_TO_NEW_RELEASES, SET_SEARCH_RESULTS } from "../types/ActionTypes";

export const bookReducer = (
  state: BookState,
  action: BooksActionTypes
): BookState => {
  switch (action.type) {
    case ADD_BOOKS_TO_NEW_RELEASES: {
      return {
        ...state,
        newReleases: action.payload.books,
      };
    }

    case SET_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action.payload.books,
      };
    }

    default:
      return state;
  }
};
