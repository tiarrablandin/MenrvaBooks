'use client';

import { useAuth } from "@/app/lib/hooks/useAuth";
import { createCommentThunk } from "@/app/lib/store/commentSlice";
import { useAppDispatch } from "@/app/lib/store/store";
import { Button, Card, CardBody, HeartIcon, Input, Typography } from "@/providers";
import { Comment } from '@/app/lib/models/comment';
import React, { useState } from "react";

interface ContentCardPropsType {
  content: string;
  date?: Date;
  tag: string;
}

function ContentCard({ content, date, tag }: ContentCardPropsType) {
  return (
    <Card color="transparent" shadow={false} className="grid items-center gap-6 ">
      <CardBody className="flex gap-5 p-0 ">
        <div className="mb-3 flex items-center gap-1">
          <Typography
            variant="paragraph"
            className="text-lg font-bold !text-gray-900 px-4"
          >
            {tag}
          </Typography>
          <Typography
            variant="small"
            className="font-medium !text-gray-900"
          >
            {content}
          </Typography>
          <Typography variant="small" className="font-bold !text-gray-700">
            {date ? date.toString() : ""}
          </Typography>
          <Button
            size="sm"
            color="red"
            variant="text"
            className="flex shrink-0 gap-1"
          >
            <HeartIcon className="h-4 w-4" />
            243
            {/* //* NEED TO ADD TABLE FOR COMMENT INTERACTIONS FOR THIS FUNCTIONALITY */}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export function NewComment({ bookId }: { bookId: number }) {
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    dispatch(createCommentThunk({ comment, bookId }))
  }

  return (
    <div>
      <div className="flex !items-center gap-4">
        <Typography variant="small" className=" flex items-center gap-2 font-bold !text-gray-900">
          {user?.tag}
        </Typography>
      </div>
      <div className="mt-4 h-full flex-col pl-14">
        <Typography className=" flex items-center gap-2 !text-sm font-normal !text-blue-gray-500">
          Constructive feedback is possible while also being nice...
        </Typography>
        <form action={handleSubmit} className="flex flex-col items-end">
          <Input variant="static" value={comment} onChange={(e) => setComment(e.target.value)} />
          <Button className="mt-4 bg-eggplant text-old-lace" size="sm">
            submit
          </Button>
        </form>
      </div>
    </div>
  );
}

const bookComments = ({ bookId, comments }: { bookId: number, comments?: Comment[] }) => {
  return (
    <div>
      <section className="mx-auto flex w-full max-w-2xl flex-col px-5 pb-20 pt-10">
        <Typography variant="h4" className="my-6 md:my-8 md:text-center">
          Have something to say about this book?
        </Typography>
        <NewComment bookId={bookId} />
        <Typography variant="h4" className="my-8 md:text-center">
          What other readers are saying about this book...
        </Typography>
        {comments ? <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-1">
          {comments.map((comment, index) => (
            <ContentCard key={index} content={comment.comment} date={comment.dateAdded} tag={comment.user.tag} />
          ))}
        </div> : <></>}
      </section>
    </div>
  );
};

export default bookComments;
