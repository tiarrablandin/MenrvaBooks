"use client";

import { User } from "@/app/lib/models/user";
import { Button, Checkbox, IconButton, PencilIcon, Switch, Tooltip, Typography } from "@/providers";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "../pagination";
import AdminTable2 from "./adminTable2";

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const currentItems = users
    .filter((user) => !showActiveOnly || !user.active)
    .slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = users.filter((user) => !showActiveOnly || !user.active).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    async function fetchAllUsers() {
      const users = await fetchUsers();
      console.log(users);
      setUser(users);
      return users;
    }
    fetchAllUsers();
  }, []);

  const toggleReviewed = async (userId: number) => {
    try {
      const response = await fetch(`http://localhost:8085/api/users/${userId}/toggle-reviewed`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to toggle reviewed status");
      }
      const updatedUser = await response.json();
      setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    } catch (error) {
      console.error("Error toggling reviewed status: ", error);
    }
  };

  const head = "User List";
  const headDesc = "See information about all users";
  const addUser = (
    <Link href="/admin/addUser">
      <Button className="md:max-w-fit w-full bg-eggplant">add user</Button>
    </Link>
  );
  const reviewedItems = (
      <Switch
        checked={showActiveOnly}
        onChange={(e) => setShowActiveOnly(e.target.checked)}
        label={
          <Typography variant="h1" className="text-md">
            Active
          </Typography>
        }
        className="before:h-8 before:w-8 checked:bg-eggplant"
      />
  );
  const tableHeaders = ["Role", "First Name", "Last Name", "Tag", "Email", "Active", "Date Added", "Edit"];

  const renderUserRow = (user: User, index: number) => (
    <tr key={index}>
      <td className="border-b border-gray-300">
        <Link href={`../user/${user.id}`}>
          <Typography variant="lead" className="pl-6 hover:underline underline-offset-2">
          {user.role}
          </Typography>
        </Link>
      </td>
      <td className="border-b border-gray-300">
        <Link href={`../user/${user.id}`}>
          <Typography variant="lead" className="hover:underline underline-offset-2">
            {user.firstName}
          </Typography>
        </Link>
      </td>
      <td className="border-b border-gray-300">
        <Link href={`../user/${user.id}`}>
          <Typography variant="lead" className="hover:underline underline-offset-2">
            {user.lastName}
          </Typography>
        </Link>
      </td>
      <td className="border-b border-gray-300">
        <Link href={`../user/${user.id}`}>
          <Typography variant="lead" className="hover:underline underline-offset-2">
            {user.tag}
          </Typography>
        </Link>
      </td>
      <td className="border-b border-gray-300">
        <Link href={`../user/${user.id}`}>
          <Typography variant="lead" className="hover:underline underline-offset-2">
            {user.email}
          </Typography>
        </Link>
      </td>
      <td className="border-b border-gray-300">
        {user.dateAdded ? <Typography variant="lead">{user.dateAdded.toString()}</Typography> : <></>}
      </td>
      <td className="mx-auto text-center pr-2 border-b border-gray-300">
        <Checkbox
          onChange={() => toggleReviewed(user.id)}
          checked={user.active}
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
        add={addUser}
        reviewedItems={reviewedItems}
        tableHeaders={tableHeaders}
        data={currentItems}
        renderRow={renderUserRow}
        pagination={paginationComponent}
      />
    </div>
  );
};

export default UserTable;
