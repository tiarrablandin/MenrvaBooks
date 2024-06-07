import { BookResponse } from "@/lib/models/book";
import { Card, CardBody } from "@/providers/coreProviders";
import Image from "next/image";

interface BookCardProps {
  book: BookResponse;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Card
      shadow={false}
      className="relative min-w-[8rem] max-w-[8rem] min-h-[12rem] max-h-[12rem] overflow-hidden rounded-lg pointer-events-none flex items-center justify-center z-10"
    >
      <CardBody className="relative w-full h-full py-14 p-0 z-10">
        <Image
          className="min-h-[12rem] rounded-none object-center shadow-deep-purple-100 relative z-10"
          src={`${book.cover}`}
          width={150}
          height={250}
          alt="book cover"
          priority
        />
      </CardBody>
    </Card>
    // <div className="min-w-12 min-h-24 bg-gray-200"></div>
  );
};
export default BookCard;
