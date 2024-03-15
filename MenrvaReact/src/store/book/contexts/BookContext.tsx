import { BookResponse } from "@/data/BookResponse";
import { createContext, useContext, useReducer } from "react";
import { BooksActionTypes } from "../actions/BookActions";
import { bookReducer } from "../reducers/BookReducer";

export type BookState = {
  books: BookResponse[];
  newReleases: BookResponse[];
};

interface BookStateProps {
  children: React.ReactNode;
}

const BookContext = createContext<
  [BookState, React.Dispatch<BooksActionTypes>] | undefined
>(undefined);

export const useBookState = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBookState must be used within a BookProvider.");
  }
  return context;
};

export const BookStateProvider: React.FC<BookStateProps> = ({ children }) => {
  const [bookState, dispatch] = useReducer<React.Reducer<BookState, BooksActionTypes>> (bookReducer, {
      books: [],
      newReleases: []
  });

  return <BookContext.Provider value={[bookState, dispatch]}>{children}</BookContext.Provider>;
};
