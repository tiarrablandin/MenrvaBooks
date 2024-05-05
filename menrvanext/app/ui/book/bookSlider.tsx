"use client";

import { Typography } from "@/providers";
import { Comic_Neue } from "next/font/google";
import { BookResponse } from "../../lib/models/book";
import BookCard from "./bookCard";
import { useEffect, useState } from "react";
import BookSkeleton from "./bookSkeleton";
import Link from "next/link";

interface BookSliderProps {
  fetchData: () => Promise<BookResponse[] | null>;
  title: string;
}

const neue = Comic_Neue({ subsets: ["latin"], weight: "400" });

const BookSlider: React.FC<BookSliderProps> = ({ fetchData, title }) => {
  const [books, setBooks] = useState<BookResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const fetchedBooks = await fetchData();
        console.log(fetchedBooks);
        if (fetchedBooks) setBooks(fetchedBooks);
      } catch (error) {
        console.error("Failed to fetch books: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    // if (!books) fetchBooks();
    fetchBooks();
  }, [fetchData]);

  return (
    <>
      <Typography variant="h2" className={`${neue.className} text-2xl self-start ml-8 my-4`}>
        {title}
      </Typography>
      <div className="flex w-[95%] items-end justify-start gap-4 overflow-scroll pb-3 md:pb-6">
        {isLoading
          ? Array(10)
            .fill(0)
            .map((_, index) => <BookSkeleton key={index} />)
          : books.map((book) => (
            <Link href={`../book/${book.id}`} key={book.id}>
              <BookCard book={book} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default BookSlider;
