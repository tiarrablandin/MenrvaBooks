"use client";

import { BookResponse } from "@/app/lib/models/book";
import Link from "next/link";
import BookCard from "../book/bookCard";
import { useMemo, useState } from "react";
import Pagination from "../pagination";

interface SearchResultsProps {
  books: BookResponse[]
}

const SearchResults: React.FC<SearchResultsProps> = ({ books }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, _setItemsPerPage] = useState(10);

  const currentItems = useMemo(
    () =>
      books
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [books, currentPage, itemsPerPage]
  );

  const totalItems = useMemo(() => books.length, [books]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="w-full h-full flex flex-col items-center justify-around gap-8">
      <div className="mx-auto grid grid-cols-5 gap-8 mt-8">
        {currentItems.map((book) => {
          return <Link href={`../book/${book.id}`} key={book.id}>
            <BookCard book={book} />
          </Link>
        })}

      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default SearchResults;