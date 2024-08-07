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
import ReduxProvider from "@/providers/reduxProvider";
import { Advent_Pro } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import BookComments from "./bookComments";
import BookSlider from "./bookSlider";
import HasReadButton from "./interactions/hasReadButton";
import InitializeInteractions from "../../lib/utils/initializeInteractions";
import InterestedButton from "./interactions/interestedButton";
import ThumbsDownComponent from "./interactions/thumbsDown";
import ThumbsUpComponent from "./interactions/thumbsUp";
import InitializeBookDetails from "@/lib/utils/initializeBookDetails";

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

  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 grid-rows-3 gap-8 pt-6 text-lg w-[97.5%] mx-auto pl-2">
          {/* Image */}
          {book?.cover ? (
            <Image src={`${book?.cover}`} width={360} height={600} alt="" className="rounded-md h-auto min-w-36 mx-auto lg:w-96 col-span-1 row-span-1 lg:row-span-3" />
          ) : (
            <></>
          )}

          {/* Title, Authors, and Interactions */}
          <div className="col-span-2 lg:col-span-2 flex flex-col justify-start p-2 pl-8 lg:pl-0 row-span-1">
            <Typography className="text-2xl text-eggplant dark:text-parchment/70 font-semibold line-clamp-2 min-h-8">
              {book ? book.title : "Loading..."}
            </Typography>
            {(book?.authors || []).map((author) => (
              <div key={author.id} className="w-full h-10 flex justify-between">
                <Link href={`../author/${author.id}`}>
                  <div className="hover:underline underline-offset-2 text-nowrap text-lg text-eggplant dark:text-parchment/70">
                    {author.penName}
                  </div>
                </Link>
              </div>
            ))}
            <div className="flex flex-col gap-4 text-deep-sea dark:text-parchment/70">
              <div className="flex gap-2">
                <ReduxProvider>
                  <div className="flex items-center gap-2">
                    <ThumbsUpComponent id={id} token={token} initialLikes={numberOfLikes} />
                  </div>
                  <div className="flex items-center gap-2">
                    <ThumbsDownComponent id={id} token={token} initialDislikes={numberOfDislikes} />
                  </div>
                  <div className="flex items-center gap-4">
                    {tag ? <InterestedButton id={id} token={token} /> : <></>}
                    {tag ? <HasReadButton id={id} token={token} /> : <></>}
                  </div>
                  {interactions ? <InitializeInteractions interactions={interactions} /> : <></>}
                  <InitializeBookDetails bookId={id}/>
                </ReduxProvider>
              </div>
              {book?.links.map((link) => (
                <div className="relative z-0 w-min" key={link.id}>
                  <Link href={link.link} target="_blank" className="relative z-0">
                    <Button
                      size="lg"
                      variant="gradient"
                      color="light-blue"
                      className="h-8 relative flex items-center overflow-hidden pr-[72px] z-0"
                    >
                      <p className={`normal-case text-nowrap text-lg font-medium -mx-4 w-min z-0 ${advent.className}`}>Purchase on Amazon</p>
                      <span className="absolute right-0 grid h-full w-12 place-items-center z-0 bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                        <FontAwesomeIcon icon={faAmazon} className="h-5 w-5 z-0" />
                      </span>
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Description and Details */}
          <div className="font-light col-span-3 lg:col-span-2 row-span-2 dark:text-old-lace flex items-center flex-col text-center -my-28  sm:-my-10 pt-4 lg:mr-8">
            <p>
              {book ? book.description : "Loading..."}
            </p>
            <div className="text-center flex mx-auto gap-8 m-4">
              <p>
                {book ? `Page Count:` : "Loading..."}
                <br />
                {book ? `${book.pageCount}` : ""}
              </p>
              |
              <p>
                {book?.publicationDate ? `Publication Date:` : "Loading..."}
                <br />
                {book?.publicationDate ? `${book.publicationDate.toString()}` : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 lg:mt-8">
        <div className="w-screen h-full flex flex-col items-center">
          {book.series ? <BookSlider defaultBooks={book.series.books.filter((book) => book.id !== Number(id))} title={"Books in Series"} /> : <></>}
        </div>
        <BookComments bookId={book?.id!!} initialComments={book?.comments} tag={tag} />
      </div>
    </>
  );
};

export default SingleBook;

