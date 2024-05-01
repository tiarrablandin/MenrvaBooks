"use client";

import { useAuth } from "@/app/lib/hooks/useAuth";
import { useBooks } from "@/app/lib/hooks/useBooks";
import { BookResponse } from "@/app/lib/models/book";
import { fetchBooks } from "@/app/lib/services/apiService";
import {
  Card,
  ThumbDown,
  ThumbDownAltOutlined,
  ThumbUp,
  ThumbUpAltOutlined,
  Typography
} from "@/providers";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BookComments from "./bookComments";
import BookSlider from "./bookSlider";
import { useAppDispatch } from "@/app/lib/store/store";
import { toggleBookLiked } from "@/app/lib/store/bookSlice";

const SingleBook: React.FC = ({ }) => {
  const searchParams = useParams();
  const id = searchParams?.id;
  const numericId = id ? parseInt(id as string, 10) : 0;
  const [book, setBook] = useState<BookResponse | null>(null);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const { toggleLiked, fetchLikedStatus, likedBooks } = useBooks();
  const { token } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchBook = async () => {
      const bookResponse = await fetch(`http://localhost:8085/api/books/${numericId}`);
      const bookData = await bookResponse.json();
      setBook(bookData);
    }
    const fetchLikeStatus = async () => {
      try {
        const interactionResponse = await fetch(`http://localhost:8085/api/books/${numericId}/interaction`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });

        if (interactionResponse.ok) {
          const interactionData = await interactionResponse.json();
          setLiked(interactionData.likeDislike === 1);
          setDisliked(interactionData.likeDislike === -1);
        }
      } catch (error) {
        console.error('Failed to fetch like status:', error);
      }
    };

    if (numericId) {
      if (token) {
        fetchLikeStatus();
      }
      fetchBook();
    }
  }, [numericId, token]);

  const handleToggleLike = () => {
    toggleLiked(numericId, liked ? 0 : 1);
    setLiked(!liked);
    if (disliked) setDisliked(false);
  }

  const handleToggleDislike = () => {
    toggleLiked(numericId, disliked ? 0 : -1);
    setDisliked(!disliked);
    if (liked) setLiked(false);
  }

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
              <ThumbDown onClick={handleToggleDislike} style={{ color: "red" }} className="cursor-pointer" />
              :
              <ThumbDownAltOutlined onClick={handleToggleDislike} style={{ color: "gray" }} className="cursor-pointer" />
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
