import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";
import { fetchGenresThunk, toggleGenreReviewed } from "../store/features/genreSlice";
import { url } from "@/providers/coreProviders";

export function useGenres() {
    const dispatch = useAppDispatch();
    const genres = useSelector((state: RootState) => state.genre.allGenres);
    const loading = useSelector((state: RootState) => state.genre.loading);
    const error = useSelector((state: RootState) => state.genre.error);
    const token = useSelector((state: RootState) => state.user.jwt);

    const fetchGenres = useCallback(() => {
        dispatch(fetchGenresThunk());
    }, [dispatch]);

    const toggleReviewed = (genreId: number) => {
        dispatch(toggleGenreReviewed({ genreId }));
    };

    const deleteEntity = useCallback(async (genreId: number) => {
        const res = await fetch(`${url}/genres/${genreId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await res.json();
        return { deleted: data.deleted }
    }, [dispatch, token])

    return {
        data: genres,
        fetchData: fetchGenres,
        loading,
        error,
        toggleReviewed,
        deleteEntity,
    };
}