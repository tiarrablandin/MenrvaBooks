import { BooksActionTypes } from "../actions/BookActions";
import { BookState } from "../contexts/BookContext";
import {
  ADD_BOOKS_TO_NEW_RELEASES
} from "../types/ActionTypes";

export const bookReducer = (
  state: BookState,
  action: BooksActionTypes
): BookState => {
  switch (action.type) {
    case ADD_BOOKS_TO_NEW_RELEASES: {
      return {
        ...state,
        state: { ...state.state, newReleases: action.payload.books },
      };
    }

    default:
      return state;
  }
};
