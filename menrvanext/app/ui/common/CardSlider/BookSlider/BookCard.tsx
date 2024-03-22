import { BookResponse } from "@/app/lib/BookResponse";
import {
  Card,
  CardBody
} from "@/providers";
import Image from "next/image";

interface BookCardProps {
  book: BookResponse;
}

const BookCard: React.FC<BookCardProps> = ({book}) => {
  return (
    <Card
      shadow={false}
      className="relative min-w-[10rem] max-w-[16rem] items-end justify-center overflow-hidden"
    >
      <CardBody className="relative w-full h-full py-14 p-0">
        <Image 
        className="h-60 w-full rounded-md object-center shadow-deep-purple-100"
        src={`${book.cover}`} 
        width={360}
        height={720}
        alt="" />
      </CardBody>
    </Card>
  );
};
export default BookCard;
