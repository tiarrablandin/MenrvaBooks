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
          <Typography variant="h4" className="font-normal uppercase text-xl">
            {header}
          </Typography>
          <Typography
            variant="h3"
            className="text-xl mt-4 flex justify-center gap-1 font-normal text-eggplant"
          >
            {` ${price}`}
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-2">
            {info.map((data, key) => (
              <li key={key} className="flex items-center gap-2">
                <span className="rounded-full p-1">
                  <CheckCircleIcon className="h-5 w-5" />
                </span>
                <Typography className="font-normal">{data}</Typography>
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter className="flex justify-center mt-6 p-0">
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
