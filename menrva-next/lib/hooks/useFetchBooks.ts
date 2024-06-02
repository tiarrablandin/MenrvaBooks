import { useEffect, useState } from "react";
import { BookResponse } from "../models/book";

const useFetchBooks = (fetchData?: () => Promise<BookResponse[] | null>, defaultBooks?: BookResponse[]) => {
  const [books, setBooks] = useState<BookResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (defaultBooks) {
      setBooks(defaultBooks);
      setIsLoading(false);
    } else if (fetchData) {
      const fetchBooks = async () => {
        setIsLoading(true);
        try {
          const fetchedBooks = await fetchData();
          if (fetchedBooks) setBooks(fetchedBooks);
        } catch (error) {
          console.error("Failed to fetch books: ", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchBooks();
    }
  }, []);

  return { books, isLoading };
};

export default useFetchBooks;