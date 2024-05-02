"use client";

import { useAuth } from "@/app/lib/hooks/useAuth";
import { useBooks } from "@/app/lib/hooks/useBooks";
import { fetchBooks } from "@/app/lib/services/apiService";
import { RootState } from "@/app/lib/store/store";
import {
  BookOpenIcon,
  BookmarkIconOutline,
  Card,
  StarIcon,
  ThumbDown,
  ThumbDownAltOutlined,
  ThumbUp,
  ThumbUpAltOutlined,
  Typography
} from "@/providers";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BookComments from "./bookComments";
import BookSlider from "./bookSlider";

const SingleBook: React.FC = ({ }) => {
  const iconClass = "w-6 h-6 cursor-pointer"
  const searchParams = useParams();
  const id = searchParams?.id;
  const numericId = id ? parseInt(id as string, 10) : 0;
  const book = useSelector((state: RootState) => state.book.currentBook);
  const { liked, disliked, favorite, hasRead, interested } = useSelector((state: RootState) => state.book.interactions);
  const { toggleLiked, fetchBookDetails, fetchBookInteractions, toggleFavorite, toggleHasRead, toggleInterested } = useBooks();
  const { token } = useAuth();

  useEffect(() => {
    if (numericId && token) {
      fetchBookDetails(numericId);
      fetchBookInteractions(numericId);
    }
  }, [numericId, token]);

  const handleToggleLike = () => { toggleLiked(numericId, liked ? 0 : 1); }

  const handleToggleDislike = () => { toggleLiked(numericId, disliked ? 0 : -1); }

  const handleToggleInterested = () => { toggleInterested(numericId); }

  const handleToggleFavorite = () => { toggleFavorite(numericId); }

  const handleToggleHasRead = () => { toggleHasRead(numericId); }

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
            {liked ?
              <ThumbUp onClick={handleToggleLike} style={{ color: "blue" }} className="cursor-pointer" />
              :
              <ThumbUpAltOutlined onClick={handleToggleLike} style={{ color: "gray" }} className="cursor-pointer" />
            }
            {disliked ?
              <ThumbDown onClick={handleToggleDislike} style={{ color: "blue" }} className="cursor-pointer" />
              :
              <ThumbDownAltOutlined onClick={handleToggleDislike} style={{ color: "gray" }} className="cursor-pointer" />
            }
            {interested ?
              <BookmarkIconOutline onClick={handleToggleInterested} style={{ color: "blue" }} className={iconClass} />
              :
              <BookmarkIconOutline onClick={handleToggleInterested} style={{ color: "gray" }} className={iconClass} />
            }
            {hasRead ?
              <BookOpenIcon onClick={handleToggleHasRead} style={{ color: "blue" }} className={iconClass} />
              :
              <BookOpenIcon onClick={handleToggleHasRead} style={{ color: "gray" }} className={iconClass} />
            }
            {favorite ?
              <StarIcon onClick={handleToggleFavorite} style={{ color: "blue" }} className={iconClass} />
              :
              <StarIcon onClick={handleToggleFavorite} style={{ color: "gray" }} className={iconClass} />
            }
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
        <BookSlider fetchData={fetchAllBooksSlider} title={"Books in Series"} />
        <BookSlider fetchData={fetchAllBooksSlider} title={"Similar Books"} />
      </div>
      <BookComments bookId={book?.id!!} comments={book?.comments} />
    </>
  );
};

export default SingleBook;
