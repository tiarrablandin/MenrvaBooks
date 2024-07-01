import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";
import { fetchAuthorsThunk, toggleAuthorReviewed } from "../store/features/authorSlice";
import { url } from "@/providers/coreProviders";

export function useAuthors() {
    const dispatch = useAppDispatch();
    const authors = useSelector((state: RootState) => state.author.allAuthors);
    const loading = useSelector((state: RootState) => state.author.loading);
    const error = useSelector((state: RootState) => state.author.error);
    const token = useSelector((state: RootState) => state.user.jwt);

    const fetchAuthors = useCallback(() => {
        dispatch(fetchAuthorsThunk());
    }, [dispatch]);

    const toggleReviewed = (authorId: number) => {
        dispatch(toggleAuthorReviewed({ authorId }));
    };

    const deleteEntity = useCallback(async (authorId: number) => {
        const res = await fetch(`${url}/authors/${authorId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await res.json()
        return { deleted: data.deleted }
    }, [dispatch, token])

    return {
        data: authors,
        loading,
        error,
        fetchData: fetchAuthors,
        toggleReviewed,
        deleteEntity,
    };
}