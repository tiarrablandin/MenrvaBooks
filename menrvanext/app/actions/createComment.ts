'use server'

import { cookies } from "next/headers";
import { fetchCreateComment } from "../lib/services/apiService";

export default async function createComment(comment: string, bookId: number) {
    try {
        const token = cookies().get('jwt')?.value;
        const { createdComment } = await fetchCreateComment(comment, bookId, token!!);
        return { comment: JSON.parse(JSON.stringify(createdComment)) };
    } catch (error) {
        console.error('Failed to create comment:', error);
    }
}