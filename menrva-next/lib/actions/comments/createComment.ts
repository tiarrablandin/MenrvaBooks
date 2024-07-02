'use server'

import { Comment } from '@/lib/models/comment';
import { fetchCreateComment } from '@/lib/services/apiService';
import { cookies } from "next/headers";

export default async function createComment(newComment: string, bookId: number): Promise<{ comment: Comment } | { error: string }> {
    const token = cookies().get('jwt')?.value;
    const createdComment = await fetchCreateComment(newComment, bookId, token!!);

    if (createdComment) {
        return { comment: createdComment };
    } else {
        console.error('Failed to create comment.');
        return { error: "Failed to create comment" };
    }
}