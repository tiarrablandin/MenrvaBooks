import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";
import { fetchGenresThunk, toggleGenreReviewed } from "../store/features/genreSlice";

export function useGenres() {
    const dispatch = useAppDispatch();
    const genres = useSelector((state: RootState) => state.genre.allGenres);
    const loading = useSelector((state: RootState) => state.genre.loading);
    const error = useSelector((state: RootState) => state.genre.error);

    const fetchGenres = useCallback(() => {
        dispatch(fetchGenresThunk());
    }, [dispatch]);

    const toggleReviewed = (genreId: number) => {
        dispatch(toggleGenreReviewed({ genreId }));
    };


    return {
        data: genres,
        fetchData: fetchGenres,
        loading,
        error,
        toggleReviewed
    };
}