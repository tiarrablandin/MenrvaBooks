import { useBooks } from "@/app/lib/hooks/useBooks";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  MagnifyingGlassIcon,
  Typography,
} from "@/providers";
import React from "react";

interface AdminTableProps {
  head: string;
  headDesc: string;
  add: JSX.Element;
  reviewedToggle: JSX.Element;
  reviewedCallback?: (bookId: number) => void
  tableHeaders: string[];
  data: any[];
  renderRow: (item: any, index: number, toggleReviewed?: (bookId: number) => void) => JSX.Element;
  pagination: JSX.Element;
}

const AdminTable: React.FC<AdminTableProps> = ({
  head,
  headDesc,
  add,
  reviewedToggle,
  tableHeaders,
  data,
  renderRow,
  pagination,
  reviewedCallback
}) => {

  return (
    <>
      <Card className="h-full w-[calc(100%-2rem)] mx-auto my-4 overflow-scroll">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none flex flex-wrap justify-between gap-2 mb-4 p-2"
        >
          <div className="">
            <Typography variant="h1" className="text-3xl">
              {head}
            </Typography>
            <Typography variant="h1" className="text-md">
              {headDesc}
            </Typography>
          </div>
          <div className="flex flex-wrap items-center w-full shrink-0 gap-4 md:w-max">
            <div className="w-full md:w-72">
              <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
            </div>
            {add}
            {reviewedCallback && reviewedToggle}
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll !p-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {tableHeaders.map((tableHeaders, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-md font-lg uppercase tracking-wider"
                  >
                    <Typography variant="h5" className="text-xl">
                      {tableHeaders}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">{data.map((item, index) => renderRow(item, index, reviewedCallback))}</tbody>
          </table>
        </CardBody>
        <CardFooter className="flex justify-between items-center">{pagination}</CardFooter>
      </Card>
    </>
  );
};

export default AdminTable;
