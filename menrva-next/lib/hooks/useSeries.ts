import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";
import { fetchSeriesThunk, toggleSeriesReviewed } from "../store/features/seriesSlice";

export function useSeries() {
    const dispatch = useAppDispatch();
    const series = useSelector((state: RootState) => state.series.allSeries);
    const loading = useSelector((state: RootState) => state.series.loading);
    const error = useSelector((state: RootState) => state.series.error);

    const fetchSeries = useCallback(() => {
        dispatch(fetchSeriesThunk());
    }, [dispatch]);

    const toggleReviewed = (seriesId: number) => {
        dispatch(toggleSeriesReviewed({ seriesId }));
    };


    return {
        data: series,
        fetchData: fetchSeries,
        loading,
        error,
        toggleReviewed
    };
}