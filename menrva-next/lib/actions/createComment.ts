'use server'

import { Comment } from '@/lib/models/comment';
import { cookies } from "next/headers";
import { fetchCreateComment } from "../services/apiService";

export default async function createComment(newComment: string, bookId: number): Promise<{ comment: Comment } | { error: string }> {
    const token = cookies().get('jwt')?.value;
    const createdComment = await fetchCreateComment(newComment, bookId, token!!);
    if (createdComment) {
        return { comment: createdComment }; // Assuming `fetchCreateComment` correctly returns a Comment object
    } else {
        console.error('Failed to create comment.');
        return { error: "Failed to create comment" };
    }
}