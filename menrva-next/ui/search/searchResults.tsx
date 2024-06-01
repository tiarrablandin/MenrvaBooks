"use client";

import { BookResponse } from "@/lib/models/book";
import Link from "next/link";
import BookCard from "../book/bookCard";
import { useMemo, useState } from "react";
import Pagination from "../pagination";

interface SearchResultsProps {
  books: BookResponse[]
}

const SearchResults: React.FC<SearchResultsProps> = ({ books }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, _setItemsPerPage] = useState(18);

  const currentItems = useMemo(
    () =>
      books
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [books, currentPage, itemsPerPage]
  );

  const totalItems = useMemo(() => books.length, [books]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between">
      <div className="w-2/3 min-h-full mx-auto grid grid-cols-6 mt-8 gap-4">
        {currentItems.map((book) => {
          return <Link href={`../book/${book.id}`} key={book.id}>
            <BookCard book={book} />
          </Link>
        })}

      </div>
      <div className="py-6">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default SearchResults;