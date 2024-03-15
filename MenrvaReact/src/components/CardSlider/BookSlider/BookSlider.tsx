import { fetchNewReleases } from "@/services/BookService";
import { useBookState } from "@/store/book/contexts/BookContext";
import { ADD_BOOKS_TO_NEW_RELEASES } from "@/store/book/types/ActionTypes";
import { useEffect } from "react";
import BookCard from "./BookCard";

interface BookSliderProps {}

const BookSlider: React.FC<BookSliderProps> = ({}) => {
  const [bookState, bookDispatch] = useBookState();

  useEffect(() => {
    const books = fetchNewReleases();
    books.then((books) => {
      bookDispatch({
        type: ADD_BOOKS_TO_NEW_RELEASES,
        payload: { books: books },
      });
    });
  }, []);

  return (
    <div className="mt-16 flex w-[95%] flex-row items-end justify-start gap-4 overflow-scroll pb-3 md:pb-6">
      {bookState.state.newReleases.map((book) => {
        return <BookCard key={book.id} book={book}></BookCard>;
      })}
    </div>
  );
};

export default BookSlider;
