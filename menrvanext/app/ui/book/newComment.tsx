'use client';

import createComment from "@/app/actions/createComment";
import { Button, Input, Typography } from "@/providers";

export async function NewComment({ bookId, tag }: { bookId: number, tag: string | undefined }) {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const comment = formData.get('comment') as string;

        // console.log(createdComment);
        void await createComment(comment, bookId);
    }

    return (
        <div>
            <div className="flex !items-center gap-4">
                <Typography variant="small" className=" flex items-center gap-2 font-bold !text-gray-900">
                    {tag ? tag : ""}
                </Typography>
            </div>
            <div className="mt-4 h-full flex-col pl-14">
                <Typography className=" flex items-center gap-2 !text-sm font-normal !text-blue-gray-500">
                    Constructive feedback is possible while also being nice...
                </Typography>
                <form onSubmit={handleSubmit} className="flex flex-col items-end">
                    <Input variant="static" type="text" name="comment" />
                    <Button className="mt-4 bg-eggplant text-old-lace" size="sm">
                        submit
                    </Button>
                </form>
            </div>
        </div>
    );
}