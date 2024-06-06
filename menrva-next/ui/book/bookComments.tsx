import { Comment } from '@/lib/models/comment';
import { Button, Card, CardBody, HeartIcon } from "@/providers/coreProviders";
import { NewComment } from "./newComment";

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
          <div className="text-lg font-bold !text-gray-900 px-4" >
            {tag}
          </div>
          <div className="font-medium !text-gray-900" >
            {content}
          </div>

          <div className="font-bold !text-gray-700">
            {date ? date.toString() : ""}
          </div>
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


const bookComments = ({ bookId, comments, tag }: { bookId: number, comments?: Comment[], tag: string | undefined }) => {
  return (
    <div>
      <section className="mx-auto flex w-full max-w-2xl flex-col px-5 pb-20 pt-10">
        <div className="my-6 md:my-8 md:text-center">
          Have something to say about this book?
        </div>
        <NewComment bookId={bookId} tag={tag} comments={comments} />
        <div className="my-8 md:text-center">
          What other readers are saying about this book...
        </div>
        {comments ?
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-1">
            {comments.map((comment, index) => (
              <ContentCard key={index} content={comment.comment} date={comment.dateAdded} tag={comment.user.tag} />
            ))}
          </div> : <></>}
      </section>
    </div>
  );
};

export default bookComments;
