"use client";

import { BookResponse } from "@/app/lib/models/book";
import { fetchBooks } from "@/app/lib/services/apiService";
import { Card, Checkbox, Typography } from "@/providers";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TABLE_HEAD = ["Title", "Author", "Date Added", "Reviewed", "Edit"];

const SearchTable: React.FC = () => {
  const [books, setBooks] = useState<BookResponse[]>([]);

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
    <Card className="h-full w-[95%] my-8 mx-auto overflow-scroll">
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
          {books.map(({ title, id, authors, dateAdded, reviewed }, index) => (
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
                <Checkbox checked={reviewed} readOnly className="checked:bg-eggplant" />
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
  );
};

export default SearchTable;
