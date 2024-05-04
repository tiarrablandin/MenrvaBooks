'use client';

import { BookResponse } from "@/app/lib/models/book";
import { BookInteraction } from "@/app/lib/models/bookInteraction";
import { fetchBookById, fetchBookInteractionsById, fetchBooks, toggleBookHasRead, toggleBookInterested, toggleBookLiked } from "@/app/lib/services/apiService";
import {
  Card,
  Typography
} from "@/providers";
import Image from "next/image";
import Link from "next/link";
import BookComments from "./bookComments";
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
  console.log("Preloading data for book", id);
  void fetchBookById(id);
  if (token) {
    void fetchBookInteractionsById(id, token);
  }
}

const SingleBook: React.FC<SingleBookProps> = ({ id, token, book, interactions, tag }) => {
  const iconClass = "w-6 h-6 cursor-pointer";
  console.log(token);
  // const book = useSelector((state: RootState) => state.book.currentBook);
  // const interactions = useSelector((state: RootState) => state.book.interactions);
  console.log(book);
  // const { liked, disliked, favorite, hasRead, interested } = useSelector((state: RootState) => state.book.interactions);
  // const { toggleLiked, fetchBookDetails, fetchBookInteractions, toggleFavorite, toggleHasRead, toggleInterested } = useBooks();
  // const { token } = useAuth();
  console.log(interactions);
  // console.log(stateInteractions);
  // useEffect(() => {
  // if (interactions) {
  // dispatch(updateInteractions(interactions));
  // }
  // }, [interactions])
  // useEffect(() => {
  //   if (id && token) {
  //     fetchBookDetails(id);
  //     fetchBookInteractions(id);
  //   }
  // }, [id, token]);

  const handleToggleLike = () => { if (token) toggleBookLiked(id, interactions?.likeDislike === 1 ? 0 : 1, token); }

  const handleToggleDislike = () => { if (token) toggleBookLiked(id, interactions?.likeDislike === -1 ? 0 : -1, token); }

  const handleToggleInterested = () => { if (token) toggleBookInterested(id, token); }

  // const handleToggleFavorite = () => { toggleFavorite(id); }

  const handleToggleHasRead = () => { toggleBookHasRead(id, token!!); }

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
          <Typography variant="h2" className="">
            {book ? book.title : "Loading..."}
          </Typography>
          {(book?.authors || []).map((author) => (
            <Link href={`../author/${author.id}`} key={author.id}>
              <Typography variant="small" className="hover:underline underline-offset-2">
                {author.penName}
              </Typography>
            </Link>
          ))}
          <div className="flex mt-2 gap-4">
            <ThumbsUpComponent liked={interactions?.likeDislike === 1} token={token} id={id} />
            <ThumbsDownComponent disliked={interactions?.likeDislike === -1} token={token} id={id} />
            {/* {interactions?.likeDislike === -1 ?
              <ThumbDown onClick={handleToggleDislike} style={{ color: "red" }} className="cursor-pointer" />
              :
              <ThumbUpAltOutlined onClick={handleToggleLike} style={{ color: "gray" }} className="cursor-pointer" />
            }
            {interactions?.interested ?
              <BookmarkIconOutline onClick={handleToggleInterested} style={{ color: "blue" }} className={iconClass} />
              :
              <BookmarkIconOutline onClick={handleToggleInterested} style={{ color: "gray" }} className={iconClass} />
            }
            {interactions?.hasRead ?
              <BookOpenIcon onClick={handleToggleHasRead} style={{ color: "blue" }} className={iconClass} />
              :
              <BookOpenIcon onClick={handleToggleHasRead} style={{ color: "gray" }} className={iconClass} />
            } */}
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
      <BookComments bookId={book?.id!!} comments={book?.comments} tag={tag}/>
    </>
  );
};

export default SingleBook;
