import { BookResponse } from "@/lib/models/book";
import { BookInteraction } from "@/lib/models/bookInteraction";
import { fetchBookById, fetchBookInteractionsById, fetchBooks } from "@/lib/services/apiService";
import {
  Button,
  Card,
  FontAwesomeIcon,
  Typography,
  faAmazon
} from "@/providers/coreProviders";
import Image from "next/image";
import Link from "next/link";
import BookComments from "./bookComments";
import HasReadButton from "./interactions/hasReadButton";
import InitializeInteractions from "./interactions/initalizeInteractions";
import InterestedButton from "./interactions/interestedButton";
import ThumbsDownComponent from "./interactions/thumbsDown";
import ThumbsUpComponent from "./interactions/thumbsUp";
import BookSlider from "./bookSlider";
import ReduxProvider from "@/providers/reduxProvider";
import { Advent_Pro } from "next/font/google";
import InitializeUserCredentials from "@/lib/utils/initializeUserCredentials";

interface SingleBookProps {
  id: number;
  book: BookResponse;
  token: string | undefined;
  tag: string | undefined;
  interactions?: BookInteraction | null;
}

export const preload = (id: number, token: string | undefined) => {
  void fetchBookById(id);
  if (token) {
    void fetchBookInteractionsById(id, token);
  }
}

const advent = Advent_Pro({ subsets: ["latin"] });

const SingleBook: React.FC<SingleBookProps> = ({ id, book, interactions, tag, token }) => {
  const numberOfLikes = book.bookInteractions ? book.bookInteractions.filter(interaction => interaction.likeDislike === 1).length : 0;
  const numberOfDislikes = book.bookInteractions ? book.bookInteractions.filter(interaction => interaction.likeDislike === -1).length : 0;
  console.log(token);

  async function fetchAllBooksSlider() {
    return fetchBooks();
  }

  return (
    <>
      <div className="flex m-8 gap-8 text-lg">
        {book?.cover ? (
          <Image src={`${book?.cover}`} width={360} height={720} alt="" className="rounded-md" />
        ) : (
          <></>
        )}
        <Card className="bg-transparent shadow-none dark:text-old-lace">
          <div className="text-2xl font-semibold">
            {book ? book.title : "Loading..."}
          </div>
          {(book?.authors || []).map((author) => (
            <div key={author.id} className="w-1/3 h-10 flex justify-between p-2">
              <Link href={`../author/${author.id}`} className="w-min">
                <div className="hover:underline underline-offset-2 text-nowrap text-lg">
                  {author.penName}
                </div>
              </Link>
            </div>
          ))}
          <div className="flex gap-4 text-gray-600 dark:text-old-lace">
            <ReduxProvider>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold">{numberOfLikes}</div>
                <ThumbsUpComponent id={id} token={token} />
              </div>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold">{numberOfDislikes}</div>
                <ThumbsDownComponent id={id} token={token} />
              </div>
              <div className="flex items-center gap-4">
                {tag ? <InterestedButton id={id} token={token} /> : <></>}
                {tag ? <HasReadButton id={id} token={token} /> : <></>}
              </div>
              {/* {interactions?.favorite ?
              <StarIcon onClick={handleToggleFavorite} style={{ color: "blue" }} className={iconClass} />
              :
              <StarIcon onClick={handleToggleFavorite} style={{ color: "gray" }} className={iconClass} />
            } */}
            </ReduxProvider>
          </div>
          {book?.links.map((link) => (
            <Link href={link.link} target="_blank" className="inline-block mt-2 w-min" key={link.id}>
              <Button
                size="lg"
                variant="gradient"
                color="light-blue"
                className="h-8 relative flex items-center overflow-hidden pr-[72px]"
              >
                <p className={`normal-case text-nowrap text-lg font-medium -mx-4 w-min ${advent.className}`}>Purchase on Amazon</p>
                <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                  <FontAwesomeIcon icon={faAmazon} className="h-5 w-5" />
                </span>
              </Button>
            </Link>
          ))}
          <div className="mt-6 dark:text-old-lace">{book ? book.description : "Loading..."}</div>
          <div className="flex justify-center gap-12 mt-8">
            <div className="text-center">
              <div className="">
                {book ? `Page Count: ${book.pageCount}` : "Loading..."}
              </div>
            </div>
            <div className="text-center">
              <div className="">
                {book?.publicationDate ? `Publication Date: ${book.publicationDate.toString()}` : ""}
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-screen h-full flex flex-col items-center">
        {/* <BookSlider fetchData={fetchAllBooksSlider} title={"Similar Books"} /> */}
        <BookSlider defaultBooks={book.series.books.filter((book) => book.id !== Number(id))} title={"Books in Series"} />
      </div>
      <BookComments bookId={book?.id!!} comments={book?.comments} tag={tag} />
    </>
  );
};

export default SingleBook;
