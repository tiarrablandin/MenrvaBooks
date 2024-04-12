"use client";

import { BookResponse } from "@/app/lib/models/book";
import { fetchBooks } from "@/app/lib/services/apiService";
import { Card, Checkbox, Typography } from "@/providers";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TABLE_HEAD = ["Title", "Author", "Date Added", "Reviewed", "Edit"];

const SearchTable: React.FC = () => {
  const [showUnreviewedOnly, setShowUnreviewedOnly] = useState(false);
  const [books, setBooks] = useState<BookResponse[]>([]);

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
      setBooks(books);
      return books;
    }
    fetchAllBooksSlider();
  }, []);

  return (
    <>
      <div className="w-[90%] flex justify-end mt-8">
        <Checkbox
          type="checkbox"
          checked={showUnreviewedOnly}
          onChange={e => setShowUnreviewedOnly(e.target.checked)}
          label="Show unreviewed books only"
          className="before:h-8 before:w-8"
        />
      </div>
      <Card className="h-full w-[95%] my-2 mx-auto overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="h6" className="text-lg leading-none opacity-70">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {books.filter(book => !showUnreviewedOnly || !book.reviewed).map(({ title, id, authors, dateAdded, reviewed }, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Link href={`book/${id}`}>
                    <Typography variant="small" className="hover:underline underline-offset-2">
                      {title}
                    </Typography>
                  </Link>
                </td>
                <td className="p-4">
                  {authors[0] ? (
                    <Link href={`author/${authors[0].id}`}>
                      <Typography variant="small" className="hover:underline underline-offset-2">
                        {authors[0].penName}
                      </Typography>
                    </Link>
                  ) : (
                    ""
                  )}
                </td>
                <td className="p-4">
                  <Typography variant="small" className="">
                    {dateAdded ? dateAdded.toString() : ""}
                  </Typography>
                </td>
                <td className="p-4">
                  <Checkbox onChange={() => toggleReviewed(id)} checked={reviewed} className="checked:bg-eggplant before:h-8 before:w-8" />
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default SearchTable;
