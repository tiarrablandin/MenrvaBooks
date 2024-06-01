
import createComment from "@/lib/actions/createComment";
import { Button, Input, Typography } from "@/providers/coreProviders";

export async function NewComment({ bookId, tag }: { bookId: number, tag: string | undefined }) {
    return (
        <div>
            <div className="flex !items-center gap-4">
                <div className=" flex items-center gap-2 font-bold !text-gray-900">
                    {tag ? tag : ""}
                </div>
            </div>
            <div className="mt-4 h-full flex-col pl-14">
                <div className=" flex items-center gap-2 !text-sm font-normal !text-blue-gray-500">
                    Constructive feedback is possible while also being nice...
                </div>
                <form action={async (formData: FormData) => {
                    'use server';
                    const comment = formData.get('comment') as string
                    await createComment(comment, bookId)
                }} className="flex flex-col items-end">
                    <Input variant="static" type="text" name="comment" id="comment" />
                    <Button className="mt-4 bg-eggplant text-old-lace" size="sm">
                        submit
                    </Button>
                </form>
            </div>
        </div>
    );
}