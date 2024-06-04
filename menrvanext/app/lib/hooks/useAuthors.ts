import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";
import { fetchAuthorsThunk, toggleAuthorReviewed } from "../store/authorSlice";

export function useAuthors() {
    const dispatch = useAppDispatch();
    const authors = useSelector((state: RootState) => state.author.allAuthors);
    const loading = useSelector((state: RootState) => state.author.loading);
    const error = useSelector((state: RootState) => state.author.error);

    const fetchAuthors = useCallback(() => {
        dispatch(fetchAuthorsThunk());
    }, [dispatch]);

    const toggleReviewed = (authorId: number) => {
        dispatch(toggleAuthorReviewed({ authorId }));
    };

    return {
        data: authors,
        loading,
        error,
        fetchData: fetchAuthors,
        toggleReviewed
    };
}