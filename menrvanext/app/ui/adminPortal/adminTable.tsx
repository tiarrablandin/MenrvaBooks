"use client";

import { BookResponse } from "@/app/lib/models/book";
import { fetchBooks } from "@/app/lib/services/apiService";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  IconButton,
  Input,
  MagnifyingGlassIcon,
  PencilIcon,
  Tooltip,
  Typography,
} from "@/providers";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Pagination from "../pagination";

const TABLE_HEAD = ["Cover", "Title", "Author", "Date Added", "Reviewed", "Edit"];

interface AdminTableProps {
  showUnreviewed: boolean;
}

const AdminTable: React.FC<AdminTableProps> = ({ showUnreviewed }) => {
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
    <section className="m-10">
      <Card className="h-full w-full">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none flex flex-wrap gap-4 justify-between mb-4 p-2"
        >
          <div>
            <Typography variant="h5">Books List</Typography>
            <Typography variant="small" className="">
              See information about all books
            </Typography>
          </div>
          <div className="flex flex-wrap items-center w-full shrink-0 gap-4 md:w-max">
            <div className="w-full md:w-72">
              <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
            </div>
            <Button className="md:max-w-fit w-full bg-eggplant">add book</Button>
          </div>
          <Checkbox
            checked={showUnreviewedOnly}
            onChange={(e) => setShowUnreviewedOnly(e.target.checked)}
            label="Reviewed"
            className="before:h-8 before:w-8"
          />
        </CardHeader>
        <CardBody className="overflow-scroll !p-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-gray-300 !p-6">
                    <Typography variant="small" className="!font-bold">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {currentItems.map(({ id, cover, title, authors, dateAdded, reviewed }, index) => (
                <tr key={index} className="">
                  <td className="pl-2 border-b border-gray-300">
                    <Link href={`book/${id}`}>
                      <Image
                        className="rounded-md object-center h-[6rem] w-[4rem]"
                        src={cover}
                        width={340}
                        height={680}
                        alt=""
                      />
                    </Link>
                  </td>
                  <td className="border-b border-gray-300">
                    <Link href={`book/${id}`}>
                      <Typography
                        variant="small"
                        className="!font-normal hover:underline underline-offset-2"
                      >
                        {title}
                      </Typography>
                    </Link>
                    {/* <Typography
                                variant="small"
                                className="!font-normal text-gray-600"
                              >
                                {/* maybe add the genres, sub-genres, and keywords here?
                              </Typography> */}
                  </td>
                  <td className="border-b border-gray-300">
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
                  <td className="border-b border-gray-300">
                    <Typography variant="small" className="!font-normal">
                      {dateAdded ? dateAdded.toString() : ""}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-gray-300">
                    <Checkbox
                      onChange={() => toggleReviewed(id)}
                      checked={reviewed}
                      className="checked:bg-eggplant before:h-8 before:w-8"
                    />
                  </td>
                  <td className="text-right pr-4 border-b border-gray-300">
                    <Tooltip content="Edit User">
                      <IconButton variant="text">
                        <PencilIcon className="w-4 h-4 text-gray-400" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex justify-between items-center">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </CardFooter>
      </Card>
    </section>
  );
};

export default AdminTable;
