import createComment from "@/lib/actions/comments/createComment";
import { Comment } from "@/lib/models/comment";
import { Button, Input } from "@/providers/coreProviders";
import { FormEvent, useState } from "react";

export function NewComment({ bookId, tag, onNewComment }: { bookId: number; tag: string | undefined; onNewComment: (comment: Comment) => void; }) {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await createComment(comment, bookId);

    if ("comment" in response) {
      onNewComment(response.comment);
      setComment('');
    } else {
      console.error(response.error);
    }
  };

  return (
    <div>
      <div className="flex !items-center gap-4">
        <div className=" flex items-center gap-2 font-bold text-eggplant dark:text-rose">{tag ? tag : ""}</div>
      </div>
      <div className="mt-4 h-full flex-col">
        <div className=" flex items-center gap-2 !text-sm font-normal !text-parchment/70">
          Constructive feedback is possible while also being nice...
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-end"
        >
          <Input variant="static" type="text" name="comment" id="comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
          <Button type="submit" className="mt-4 bg-eggplant text-parchment/70" size="sm">
            <p>submit</p>
          </Button>
        </form>
      </div>
    </div>
  );
}
