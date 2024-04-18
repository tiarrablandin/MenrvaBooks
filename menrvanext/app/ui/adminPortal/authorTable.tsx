"use client";

import { Author } from "@/app/lib/models/author";
import { fetchAuthors } from "@/app/lib/services/apiService";
import { Button, Checkbox, IconButton, PencilIcon, Switch, Tooltip, Typography } from "@/providers";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "../pagination";
import AdminTable2 from "./adminTable2";

const AuthorTable: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [showUnreviewedOnly, setShowUnreviewedOnly] = useState(false);
  const currentItems = authors
    .filter((author) => !showUnreviewedOnly || !author.reviewed)
    .slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = authors.filter((author) => !showUnreviewedOnly || !author.reviewed).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    async function fetchAllAuthors() {
      const authors = await fetchAuthors();
      console.log(authors);
      setAuthors(authors);
      return authors;
    }
    fetchAllAuthors();
  }, []);

  const toggleReviewed = async (authorId: number) => {
    try {
      const response = await fetch(`http://localhost:8085/api/authors/${authorId}/toggle-reviewed`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to toggle reviewed status");
      }
      const updatedAuthor = await response.json();
      setAuthors(authors.map((author) => (author.id === updatedAuthor.id ? updatedAuthor : author)));
    } catch (error) {
      console.error("Error toggling reviewed status: ", error);
    }
  };

  const head = "Authors List";
  const headDesc = "See information about all authors";
  const addAuthor = (
    <Link href="/admin/addBook">
      <Button className="md:max-w-fit w-full bg-eggplant">add author</Button>
    </Link>
  );
  const reviewedItems = (
      <Switch
        checked={showUnreviewedOnly}
        onChange={(e) => setShowUnreviewedOnly(e.target.checked)}
        label={
          <Typography variant="h1" className="text-md">
            Reviewed
          </Typography>
        }
        className="before:h-8 before:w-8 checked:bg-eggplant"
      />
  );
  const tableHeaders = ["User", "Pen Name", "Date Added", "Reviewed", "Edit"];

  const renderAuthorRow = (author: Author, index: number) => (
    <tr key={index}>
      <td className="border-b border-gray-300">
        <Link href={`../author/${author.id}`}>
          <Typography variant="lead" className="hover:underline underline-offset-2">
          {author.user ? author.user.tag : 'Anonymous'}
          </Typography>
        </Link>
      </td>
      <td className="border-b border-gray-300">
        <Link href={`../author/${author.id}`}>
          <Typography variant="lead" className="hover:underline underline-offset-2">
            {author.penName ? author.penName : "any"}
          </Typography>
        </Link>
      </td>
      <td className="border-b border-gray-300">
        {author.dateAdded ? <Typography variant="lead">{author.dateAdded.toString()}</Typography> : <></>}
      </td>
      <td className="mx-auto text-center pr-2 border-b border-gray-300">
        <Checkbox
          onChange={() => toggleReviewed(author.id)}
          checked={author.reviewed}
          className="checked:bg-eggplant border-eggplant before:h-8 before:w-8"
        />
      </td>
      <td className="text-center mx-auto pr-2 border-b border-gray-300">
        <Tooltip content="Edit User">
          <IconButton variant="text">
            <PencilIcon className="w-4 h-4 text-eggplant" />
          </IconButton>
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
        add={addAuthor}
        reviewedItems={reviewedItems}
        tableHeaders={tableHeaders}
        data={currentItems}
        renderRow={renderAuthorRow}
        pagination={paginationComponent}
      />
    </div>
  );
};

export default AuthorTable;
