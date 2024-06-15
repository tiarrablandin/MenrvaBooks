"use client";

import { BookResponse } from "@/lib/models/book";
import { fetchBooks } from "@/lib/services/apiService";
import { Card, Checkbox, Typography } from "@/providers/coreProviders";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Pagination from "../pagination";

const TABLE_HEAD = ["Title", "Author", "Date Added", "Reviewed", "Edit"];

interface SearchTableProps {
  showUnreviewedOnly: boolean
}

const SearchTable: React.FC<SearchTableProps> = ({ showUnreviewedOnly }) => {
  const [books, setBooks] = useState<BookResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = books.filter(book => !showUnreviewedOnly || !book.reviewed).slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = books.filter(book => !showUnreviewedOnly || !book.reviewed).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const toggleReviewed = async (bookId: number) => {
    try {
      const response = await fetch(`http://localhost:8085/api/books/${bookId}/toggle-reviewed`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to toggle reviewed status');
      }
      const updatedBook = await response.json();
      setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
    } catch (error) {
      console.error('Error toggling reviewed status: ', error);
    }
  }

  useEffect(() => {
    async function fetchAllBooksSlider() {
      const books = await fetchBooks();
      console.log(books);
      if (books) setBooks(books);
      return books;
    }
    fetchAllBooksSlider();
  }, []);

  return (
    <>
      <Card className="h-full w-full my-4 mx-auto overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-eggplant dark:border-rose/70 bg-blue-gray-50 p-4">
                  <p className="text-lg leading-none opacity-70">
                    {head}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map(({ title, id, authors, dateAdded, reviewed }, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Link href={`book/${id}`}>
                    <p className="hover:underline underline-offset-2">
                      {title}
                    </p>
                  </Link>
                </td>
                <td className="p-4">
                  {authors[0] ? (
                    <Link href={`author/${authors[0].id}`}>
                      <p className="hover:underline underline-offset-2">
                        {authors[0].penName}
                      </p>
                    </Link>
                  ) : (
                    ""
                  )}
                </td>
                <td className="p-4">
                  <p className="">
                    {dateAdded ? dateAdded.toString() : ""}
                  </p>
                </td>
                <td className="p-4">
                  <Checkbox onChange={() => toggleReviewed(id)} checked={reviewed} className="checked:bg-eggplant before:h-8 before:w-8" />
                </td>
                <td className="p-4">
                  <p
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </>
  );
};

export default SearchTable;
