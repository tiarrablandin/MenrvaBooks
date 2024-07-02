import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";
import { fetchSeriesThunk, toggleSeriesReviewed } from "../store/features/seriesSlice";
import { url } from "@/providers/coreProviders";

export function useSeries() {
    const dispatch = useAppDispatch();
    const series = useSelector((state: RootState) => state.series.allSeries);
    const loading = useSelector((state: RootState) => state.series.loading);
    const error = useSelector((state: RootState) => state.series.error);
    const token = useSelector((state: RootState) => state.user.jwt)

    const fetchSeries = useCallback(() => {
        dispatch(fetchSeriesThunk());
    }, [dispatch]);

    const toggleReviewed = (seriesId: number) => {
        dispatch(toggleSeriesReviewed({ seriesId }));
    };

    const deleteEntity = useCallback(async (seriesId: number) => {
        const res = await fetch(`${url}/series/${seriesId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await res.json()
        return { deleted: data.deleted }
    }, [dispatch, token])

    return {
        data: series,
        fetchData: fetchSeries,
        loading,
        error,
        toggleReviewed,
        deleteEntity,
    };
}