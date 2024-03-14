import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { fetchBooks } from "@/services/bookService";
import { BookResponse } from "@/data/BookResponse";

interface BookSliderProps {}

const BookSlider: React.FC<BookSliderProps> = ({}) => {
  const [books, setBooks] = useState<BookResponse[]>([]);

  useEffect(() => {
    const books = fetchBooks();
    books.then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <div className="flex w-[250%] justify-center overflow-scroll">
      {books.map((book) => {
        return <BookCard key={book.id} book={book}></BookCard>;
      })}
    </div>
  );
};

export default BookSlider;
