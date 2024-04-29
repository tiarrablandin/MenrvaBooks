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
  tableHeaders,
  data,
  renderRow,
  pagination,
  reviewedCallback,
  activeCallback,
  variant,
}) => {
  return (
    <>
      <Card className={variant === 'small' ? "h-[50vh] w-[95%] mx-auto my-4 overflow-scroll" : "h-full w-[calc(100%-2rem)] mx-auto my-4 overflow-scroll"}>
        <CardHeader
          floated={false}
          shadow={false}
          className={`h-[55%] rounded-none flex flex-nowrap justify-between gap-2 p-2 overflow-x-scroll no-scrollbar ${variant === 'small' ? 'flex-col' : ''}`}
        >
          <div className={`${variant === 'small' ? 'flex items-center gap-4' : ''}`}>
            <Typography variant="h1" className="text-3xl">
              {head}
            </Typography>
            <Typography variant="h1" className="text-md">
              {headDesc}
            </Typography>
          </div>
          <div className="flex flex-nowrap items-center w-full shrink-0 gap-4 md:w-max">
            <div className="w-3/5 lg:w-72">
              <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
            </div>
            <div className="flex flex-col gap-2">
              {add}
              {reviewedCallback && reviewedToggle}
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
            <tbody className="">{data.map((item, index) => renderRow(item, index, reviewedCallback, activeCallback))}</tbody>
          </table>
        </CardBody>
        <CardFooter className={`flex justify-between items-center ${variant === 'small' ? '' : ''}`}>{pagination}</CardFooter>
      </Card>
    </>
  );
};

export default AdminTable;
