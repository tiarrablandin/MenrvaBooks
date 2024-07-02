'use client';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Input,
  MagnifyingGlassIcon,
  PlusIcon,
  Tooltip,
  Typography,
} from "@/providers/coreProviders";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { tableConfig } from "./tableConfig";
import createTableRow from "@/lib/actions/createTableRow";
import { Advent_Pro } from "next/font/google";

type NoReviewed = "genres" | "sub-genres" | "keywords" | "tags" | "users" | "comments";

const advent = Advent_Pro({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

interface AdminTableProps {
  head: string;
  headDesc: string;
  reviewedToggle: JSX.Element;
  activeToggle?: JSX.Element;
  reviewedCallback?: (bookId: number) => void;
  activeCallback?: (id: number) => void;
  deleteCallback?: (id: number) => any;
  tableHeaders: string[];
  initialData: any[];
  renderRow: (item: any, index: number, reviewedCallback?: (bookId: number) => void, activeCallback?: (id: number) => void, deleteCallback?: (id: number) => any) => JSX.Element;
  pagination: JSX.Element;
  variant?: 'small' | 'normal';
}

const AdminTable: React.FC<AdminTableProps> = ({
  head,
  headDesc,
  reviewedToggle,
  activeToggle,
  tableHeaders,
  initialData,
  renderRow,
  pagination,
  reviewedCallback,
  activeCallback,
  deleteCallback,
  variant,
}) => {
  const [data, setData] = useState<any[]>(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [addingNew, setAddingNew] = useState(false);

  const normalizedHead = head.toLowerCase().replace(/ list$/, "");
  const showReviewedToggle: boolean = !["genres", "sub-genres", "keyword", "tag", "users", "comments"].includes(normalizedHead as NoReviewed);
  const entityType = normalizedHead;

  useEffect(() => {
    setData(initialData)
  }, [initialData])

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

  const onDelete = useCallback((id: number) => {
    if (deleteCallback) {
      deleteCallback(id);
      setData(prevData => prevData.filter(item => item.id !== id));
    }
  }, [deleteCallback]);


  return (
    <>
      <Card className={` ${variant === 'small' ? 'h-[85vh] w-[95%] mx-auto my-4 overflow-scroll' : 'h-full w-[calc(100%-2rem)] mx-auto my-4 overflow-scroll'} ${advent.className} text-parchment/70 bg-deep-sea/90 dark:bg-deep-sea/70`}>
        <CardHeader
          floated={false}
          shadow={false}
          className={`h-1/6 rounded-none flex flex-nowrap justify-between gap-2 p-2 text-nowrap overflow-x-scroll no-scrollbar ${variant === 'small' ? 'flex-col' : ''} bg-transparent`}
        >
          <div className='flex items-center justify-between gap-4 w-full'>
            <div className="flex flex-col">
              <p className="text-3xl text-eggplant dark:text-rose/70">
                {head}
              </p>
              <p className="text-md">
                {headDesc}
              </p>
            </div>
            <div className="w-1/2 lg:w-48">
              <Input
                label="Search"
                labelProps={{
                  className: "hidden",
                }}
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchTerm}
                className="active:!border-t-eggplant !border-eggplant dark:!border-parchment/70 !text-parchment/70"
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex gap-5 items-center mr-2">
              {['books', 'users', 'authors'].includes(normalizedHead) ?
                <Tooltip content={`Add ${entityType}`}>
                  <IconButton variant="text" className="rounded-full text-eggplant dark:text-rose/70">
                    <Link href={tableConfig[entityType].addLink} className="w-min">
                      <PlusIcon className="w-5 h-5 bg-clip-text text-eggplant dark:text-rose/70" />
                    </Link>
                  </IconButton>
                </Tooltip> :
                (entityType !== "comments" ? <Tooltip content={`Add ${entityType}`}>
                  <IconButton variant="text" className="rounded-full">
                    <PlusIcon className="w-5 h-5 bg-clip-text text-eggplant dark:text-rose/70" onClick={() => setAddingNew(!addingNew)} />
                  </IconButton>
                </Tooltip> : <></>)
              }
              {showReviewedToggle && reviewedCallback && reviewedToggle}
              {activeCallback && activeToggle}
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll w-full !p-0 mt-6 h-full text-center">
          <table className="w-full h-full table-auto">
            <thead>
              <tr>
                {tableHeaders.map((tableHeaders, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 text-center text-md font-lg uppercase tracking-wider text-nowrap"
                  >
                    <p className="text-xl text-eggplant dark:text-rose/70">
                      {tableHeaders}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {filteredData.map((item, index) => renderRow(item, index, reviewedCallback, activeCallback, onDelete))}
              {addingNew && (
                <tr className="">
                  <td colSpan={tableHeaders.length} className="">
                    <form action={async (formData: FormData) => {
                      const name = formData.get('name') as string
                      setAddingNew(false);
                      const row = await createTableRow(name, normalizedHead);
                      filteredData.push(row?.createdRow);
                    }}
                      className="w-3/4 mx-auto p-1"
                    >
                      <Input
                        autoFocus
                        onBlur={() => setAddingNew(false)}
                        label="name"
                        labelProps={{
                          className: "hidden",
                        }}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter new name and press Enter"
                        className="!border-eggplant dark:!border-rose/70 text-parchment/70"
                      />
                    </form>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className={`flex justify-between items-center ${variant === 'small' ? 'scale-[85%]' : ''}`}>{pagination}</CardFooter>
      </Card>
    </>
  );
};

export default AdminTable;
