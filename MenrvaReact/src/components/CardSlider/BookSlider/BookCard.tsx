import { BookResponse } from "@/data/BookResponse";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

interface BookCardProps {
  book: BookResponse;
}

const BookCard: React.FC<BookCardProps> = ({book}) => {
  return (
    <Card
      shadow={false}
      className="relative grid w-full min-w-[20rem] max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative px-6 py-14 md:px-12">
        <img src="https://imgur.com/Qdz9MBc" alt="" />
      </CardBody>
    </Card>
  );
};
export default BookCard;
