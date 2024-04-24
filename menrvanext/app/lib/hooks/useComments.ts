import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";
import { fetchCommentsThunk, toggleCommentReviewed } from "../store/commentSlice";

export function useComments() {
    const dispatch = useAppDispatch();
    const comments = useSelector((state: RootState) => state.comment.allComments);
    const loading = useSelector((state: RootState) => state.comment.loading);
    const error = useSelector((state: RootState) => state.comment.error);

    const fetchComments = useCallback(() => {
        dispatch(fetchCommentsThunk());
    }, [dispatch]);

    const toggleReviewed = (commentId: number) => {
        dispatch(toggleCommentReviewed({ commentId }));
    };


    return {
        data: comments,
        fetchData: fetchComments,
        loading,
        error,
        toggleReviewed
    };
}