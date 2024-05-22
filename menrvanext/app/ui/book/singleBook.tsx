import { BookResponse } from "@/app/lib/models/book";
import { BookInteraction } from "@/app/lib/models/bookInteraction";
import { fetchBookById, fetchBookInteractionsById, fetchBooks } from "@/app/lib/services/apiService";
import {
  Card,
  FontAwesomeIcon,
  Typography,
  faAmazon
} from "@/providers";
import Image from "next/image";
import Link from "next/link";
import BookComments from "./bookComments";
import HasReadButton from "./interactions/hasReadButton";
import InitializeInteractions from "./interactions/initalizeInteractions";
import InterestedButton from "./interactions/interestedButton";
import ThumbsDownComponent from "./interactions/thumbsDown";
import ThumbsUpComponent from "./interactions/thumbsUp";

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

const SingleBook: React.FC<SingleBookProps> = ({ id, book, interactions, tag }) => {
  const numberOfLikes = book.bookInteractions ? book.bookInteractions.filter(interaction => interaction.likeDislike === 1).length : 0;
  const numberOfDislikes = book.bookInteractions ? book.bookInteractions.filter(interaction => interaction.likeDislike === -1).length : 0;

  async function fetchAllBooksSlider() {
    return fetchBooks();
  }

  return (
    <>
      <div className="flex m-8 gap-8">
        {book?.cover ? (
          <Image src={`${book?.cover}`} width={360} height={720} alt="" className="rounded-md" />
        ) : (
          <></>
        )}
        <Card className="bg-transparent shadow-none">
          <Typography variant="h2" className="text-xl">
            {book ? book.title : "Loading..."}
          </Typography>
          {(book?.authors || []).map((author) => (
            <div key={author.id} className="w-1/3 h-10 flex justify-between py-2">
              <Link href={`../author/${author.id}`} className="w-min">
                <Typography variant="small" className="hover:underline underline-offset-2 text-nowrap text-lg">
                  {author.penName}
                </Typography>
              </Link>
              {book?.links.map((link) => (
                <Link href={link.link} className="inline-block mt-1" key={link.id}>
                  <FontAwesomeIcon icon={faAmazon} className="h-6 w-6" />
                </Link>
              ))}
            </div>
          ))}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Typography className="text-2xl font-bold">{numberOfLikes}</Typography>
              <ThumbsUpComponent id={id} />
            </div>
            <div className="flex items-center gap-2">
              <Typography className="text-2xl font-bold">{numberOfDislikes}</Typography>
              <ThumbsDownComponent id={id} />
            </div>
            {tag ? <InterestedButton id={id} /> : <></>}
            {tag ? <HasReadButton id={id} /> : <></>}
            {/* {interactions?.favorite ?
              <StarIcon onClick={handleToggleFavorite} style={{ color: "blue" }} className={iconClass} />
              :
              <StarIcon onClick={handleToggleFavorite} style={{ color: "gray" }} className={iconClass} />
            } */}
          </div>
          <Typography className="mt-6">{book ? book.description : "Loading..."}</Typography>
          <div className="flex justify-center gap-12 mt-8">
            <div className="text-center">
              <Typography>Page Count:</Typography>
              <Typography variant="h6" className="">
                {book ? ` ${book.pageCount}` : "Loading..."}
              </Typography>
            </div>
            <div className="text-center">
              <Typography>Publication Date:</Typography>
              <Typography variant="h6" className="">
                {book?.publicationDate ? book.publicationDate.toString() : ""}
              </Typography>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-screen h-full flex flex-col items-center">
        {/* <BookSlider fetchData={fetchAllBooksSlider} title={"Books in Series"} />
        <BookSlider fetchData={fetchAllBooksSlider} title={"Similar Books"} /> */}
      </div>
      <BookComments bookId={book?.id!!} comments={book?.comments} tag={tag} />
      {interactions ? <InitializeInteractions interactions={interactions} /> : <></>}
    </>
  );
};

export default SingleBook;
