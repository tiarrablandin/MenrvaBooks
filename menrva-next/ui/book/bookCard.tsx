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
      className="relative min-w-[8rem] max-w-[8rem] min-h-[12rem] max-h-[12rem] overflow-hidden rounded-lg pointer-events-none flex items-center justify-center z-0"
    >
      <CardBody className="relative block w-full h-full py-14 p-0 z-0">
        <Image
          className="min-h-[12rem] rounded-none object-center shadow-deep-purple-100  z-0"
          src={`${book.cover}`}
          alt="book cover"
          width={144}
          height={144}
          priority
          // fill
        />
      </CardBody>
    </Card>
    // <div className="min-w-12 min-h-24 bg-gray-200"></div>
  );
};
export default BookCard;
