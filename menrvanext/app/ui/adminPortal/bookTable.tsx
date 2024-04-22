"use client";

import { BookResponse } from "@/app/lib/models/book";
import AdminTable2 from "./adminTable2";
import { useEffect, useState } from "react";
import { fetchBooks } from "@/app/lib/services/apiService";
import Link from "next/link";
import Image from "next/image";
import { Button, Checkbox, IconButton, PencilIcon, Switch, Tooltip, Typography } from "@/providers";
import Pagination from "../pagination";

const BookTable: React.FC = () => {
  const [books, setBooks] = useState<BookResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [showUnreviewedOnly, setShowUnreviewedOnly] = useState(false);
  const currentItems = books
    .filter((book) => !showUnreviewedOnly || !book.reviewed)
    .slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = books.filter((book) => !showUnreviewedOnly || !book.reviewed).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    async function fetchAllBooks() {
      const books = await fetchBooks();
      console.log(books);
      setBooks(books);
      return books;
    }
    fetchAllBooks();
  }, []);

  const toggleReviewed = async (bookId: number) => {
    try {
      const response = await fetch(`http://localhost:8085/api/books/${bookId}/toggle-reviewed`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to toggle reviewed status");
      }
      const updatedBook = await response.json();
      setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
    } catch (error) {
      console.error("Error toggling reviewed status: ", error);
    }
  };

  const head = "Books List";
  const headDesc = "See information about all books";
  const addBook = (
    <Link href="/admin/addBook">
      <Button className="md:max-w-fit w-full bg-eggplant">add book</Button>
    </Link>
  );
  const reviewedItems = (
    <Switch
      checked={showUnreviewedOnly}
      onChange={(e) => setShowUnreviewedOnly(e.target.checked)}
      label={
        <Typography variant="lead">
          Reviewed
        </Typography>
      }
      className="before:h-8 before:w-8 checked:bg-eggplant"
    />
  );
  const tableHeaders = ["Cover", "Title", "Author", "Date Added", "Reviewed", "Edit"];

  const renderBookRow = (book: BookResponse, index: number) => (
    <tr key={index}>
      <td className="pl-4 border-b border-gray-300">
        <Link href={`../book/${book.id}`}>
          <Image
            className="rounded-md object-center h-[6rem] w-[4rem]"
            src={book.cover}
            width={340}
            height={680}
            alt=""
          />
        </Link>
      </td>
      <td className="border-b border-gray-300">
        <Link href={`../book/${book.id}`}>
          <Typography variant="lead" className="hover:underline underline-offset-2">
            {book.title}
          </Typography>
        </Link>
      </td>
      <td className="border-b border-gray-300">
        {book.authors[0] ? (
          <Link href={`../author/${book.authors[0].id}`}>
            <Typography variant="lead" className="hover:underline underline-offset-2">
              {book.authors[0].penName}
            </Typography>
          </Link>
        ) : (
          ""
        )}
      </td>
      <td className="border-b border-gray-300">
        <Typography variant="lead">{book.dateAdded.toString()}</Typography>
      </td>
      <td className="mx-auto text-center pr-2 border-b border-gray-300">
        <Checkbox
          onChange={() => toggleReviewed(book.id)}
          checked={book.reviewed}
          className="checked:bg-eggplant border-eggplant before:h-8 before:w-8"
        />
      </td>
      <td className="text-center mx-auto pr-2 border-b border-gray-300">
        <Tooltip content="Edit Book">
          <Link href={`/admin/books/${book.id}`}>
            <IconButton variant="text">
              <PencilIcon className="w-4 h-4 text-eggplant" />
            </IconButton>
          </Link>
        </Tooltip>
      </td>
    </tr>
  );
  const pagination = () => (
    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
  );
  const paginationComponent = pagination();

  return (
    <div>
      <AdminTable2
        head={head}
        headDesc={headDesc}
        add={addBook}
        reviewedItems={reviewedItems}
        tableHeaders={tableHeaders}
        data={currentItems}
        renderRow={renderBookRow}
        pagination={paginationComponent}
      />
    </div>
  );
};

export default BookTable;
