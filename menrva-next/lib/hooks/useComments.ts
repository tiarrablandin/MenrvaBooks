import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";
import { fetchCommentsThunk, toggleCommentReviewed } from "../store/features/commentSlice";
import { url } from "@/providers/coreProviders";

export function useComments() {
    const dispatch = useAppDispatch();
    const comments = useSelector((state: RootState) => state.comment.allComments);
    const loading = useSelector((state: RootState) => state.comment.loading);
    const error = useSelector((state: RootState) => state.comment.error);
    const token = useSelector((state: RootState) => state.user.jwt);

    const fetchComments = useCallback(() => {
        dispatch(fetchCommentsThunk());
    }, [dispatch]);

    const toggleReviewed = (commentId: number) => {
        console.log("WRONG");
        dispatch(toggleCommentReviewed({ commentId }));
    };

    const deleteEntity = useCallback(async (commentId: number) => {
        const res = await fetch(`${url}/comments/${commentId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await res.json();
        return { deleted: data.deleted }
    }, [dispatch, token])

    return {
        data: comments,
        fetchData: fetchComments,
        loading,
        error,
        toggleReviewed,
        deleteEntity,
    };
}