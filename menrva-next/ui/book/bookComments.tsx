'use client';

import { Comment } from '@/lib/models/comment';
import { Button, Card, CardBody, HeartIcon } from "@/providers/coreProviders";
import { NewComment } from "./newComment";
import { useState } from 'react';

interface ContentCardPropsType {
  content: string;
  date?: Date;
  tag: string;
}

function ContentCard({ content, date, tag }: ContentCardPropsType) {
  return (
    <Card color="transparent" shadow={false} className="grid items-center gap-6 ">
      <CardBody className="flex p-0 w-full">
        <div className="mb-3 flex items-center gap-1 w-full justify-around">
          <p className="text-lg font-bold text-eggplant dark:text-rose px-4" >
            {tag}
          </p>
          <p className="font-medium text-deep-sea dark:text-parchment/70" >
            {content}
          </p>

          <p className="font-bold">
            {date ? date.toString() : ""}
          </p>
          <Button
            size="sm"
            variant="text"
            className="flex shrink-0 gap-1 text-rose"
          >
            <HeartIcon className="h-4 w-4" />
            243
            {/* TODO NEED TO ADD TABLE FOR COMMENT INTERACTIONS FOR THIS FUNCTIONALITY */}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}


const BookComments = ({ bookId, initialComments, tag }: { bookId: number, initialComments?: Comment[], tag: string | undefined }) => {
  const [comments, setComments] = useState(initialComments || []);

  const handleNewComment = (newComment: Comment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div>
      <section className="mx-auto flex w-full max-w-2xl flex-col px-5 pb-20 pt-10">
        {tag ? <div className="my-6 md:my-8 md:text-center">
          Have something to say about this book?
        </div> : <></>}
        {tag ? <NewComment bookId={bookId} tag={tag} onNewComment={handleNewComment} /> : <></>}
        {comments.length > 0 ? <div className="my-8 md:text-center">
          What other readers are saying about this book...
        </div> : <></>}
        {comments.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-1">
            {comments.map((comment, index) => (
              <ContentCard key={index} content={comment.comment} date={comment.dateAdded} tag={comment.user.tag} />
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default BookComments;
