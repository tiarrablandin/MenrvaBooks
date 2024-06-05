import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CheckCircleIcon,
  Typography
} from "@/providers/coreProviders";
import React from "react";
import RegisterForm from "./register";
import Link from "next/link";

interface SubCardProps {
  header: string;
  price: string;
  info: string[];
}

const subCard: React.FC<SubCardProps> = ({ header, price, info }) => {
  return (
    <div>
      <Card variant="gradient" className="flex justify-between h-[30rem] w-72 max-w-[20rem] p-6 bg-pink-lavender/50 dark:bg-chinese-violet/50">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-4 rounded-none border-b border-white/10 pb-4 text-center"
        >
          <div className="font-normal uppercase text-xl">
            {header}
          </div>
          <div
            className="text-xl mt-4 flex justify-center gap-1 font-normal text-eggplant"
          >
            {` ${price}`}
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-1">
            {info.map((data, key) => (
              <li key={key} className="flex items-center gap-1 text-nowrap">
                <span className="rounded-full p-1">
                  <CheckCircleIcon className="h-5 w-5" />
                </span>
                <div className="font-normal">{data}</div>
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter className="flex justify-center mt-6 p-0">
          <Link href="/register" >
            <Button
              size="lg"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-eggplant"
              ripple={false}
              fullWidth={true}
            >
              Subscribe
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default subCard;
