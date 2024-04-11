import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CheckCircleIcon,
} from "@/providers";
import React from "react";
import RegisterForm from "./register";

interface SubCardProps {
  header: string;
  price: number;
  info: string[];
}

const subCard: React.FC<SubCardProps> = ({ header, price, info }) => {
  return (
    <div>
      <Card variant="gradient" className="flex justify-between w-72 max-w-[20rem] p-8 bg-pink-lavender/70 dark:bg-chinese-violet">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography variant="small" className="font-normal uppercase">
            {header}
          </Typography>
          <Typography
            variant="h1"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal text-eggplant"
          >
            <span className="mt-2 text-4xl">$</span>
            {`${price} `}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            {info.map((data, key) => (
              <li key={key} className="flex items-center gap-4">
                <span className="rounded-full p-1">
                  <CheckCircleIcon className="h-5 w-5" />
                </span>
                <Typography className="font-normal">{data}</Typography>
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter className="flex justify-center mt-12 p-0">
          <RegisterForm/>
          {/* <Button
          href="/register"
            size="lg"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-eggplant"
            ripple={false}
            fullWidth={true}
          >
            Subscribe
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default subCard;
