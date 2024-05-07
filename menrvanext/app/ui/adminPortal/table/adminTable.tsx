'use client';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  MagnifyingGlassIcon,
  Typography,
} from "@/providers";
import React, { useMemo, useState } from "react";

type NoReviewed = "genres" | "sub-genres" | "keywords" | "tags" | "users" | "comments";

interface AdminTableProps {
  head: string;
  headDesc: string;
  add: JSX.Element;
  reviewedToggle: JSX.Element;
  activeToggle?: JSX.Element;
  reviewedCallback?: (bookId: number) => void
  activeCallback?: (id: number) => void
  tableHeaders: string[];
  data: any[];
  renderRow: (item: any, index: number, toggleReviewed?: (bookId: number) => void, toggleActive?: (id: number) => void) => JSX.Element;
  pagination: JSX.Element;
  variant?: 'small' | 'normal';
}

const AdminTable: React.FC<AdminTableProps> = ({
  head,
  headDesc,
  add,
  reviewedToggle,
  activeToggle,
  tableHeaders,
  data,
  renderRow,
  pagination,
  reviewedCallback,
  activeCallback,
  variant,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const normalizedHead = head.toLowerCase().replace(/ list$/, "");
  const showReviewedToggle: boolean = !["genres", "sub-genres", "keyword", "tag", "users", "comments"].includes(normalizedHead as NoReviewed);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter((item) => {
      return Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchTerm)
      );
    });
  }, [data, searchTerm]);

  return (
    <>
      <Card className={variant === 'small' ? "h-[85vh] w-[95%] mx-auto my-4 overflow-scroll" : "h-full w-[calc(100%-2rem)] mx-auto my-4 overflow-scroll"}>
        <CardHeader
          floated={false}
          shadow={false}
          className={`h-1/6 rounded-none flex flex-nowrap justify-between gap-2 p-2 text-nowrap overflow-x-scroll no-scrollbar ${variant === 'small' ? 'flex-col' : ''}`}
        >
          <div className='flex items-center justify-between gap-4 w-full'>
            <div className="flex flex-col">
              <Typography variant="h1" className="text-3xl">
                {head}
              </Typography>
              <Typography variant="h1" className="text-md">
                {headDesc}
              </Typography>
            </div>
            <div className="w-1/2 lg:w-48">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex gap-5 items-center mr-2">
              {add}
              {showReviewedToggle && reviewedCallback && reviewedToggle}
              {activeCallback && activeToggle}
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll w-full !p-0 mt-6 h-full text-center">
          <table className="w-full table-auto">
            <thead>
              <tr>
                {tableHeaders.map((tableHeaders, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 text-center text-md font-lg uppercase tracking-wider text-nowrap"
                  >
                    <Typography variant="h5" className="text-xl">
                      {tableHeaders}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">{filteredData.map((item, index) => renderRow(item, index, reviewedCallback, activeCallback))}</tbody>
          </table>
        </CardBody>
        <CardFooter className={`flex justify-between items-center ${variant === 'small' ? 'scale-[85%]' : ''}`}>{pagination}</CardFooter>
      </Card>
    </>
  );
};

export default AdminTable;
