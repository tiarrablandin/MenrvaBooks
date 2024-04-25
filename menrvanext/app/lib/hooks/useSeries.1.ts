import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";
import { fetchSeriesThunk } from "../store/seriesSlice";


export function useSeries() {
    const dispatch = useAppDispatch();
    const series = useSelector((state: RootState) => state.tag.allTags);
    const loading = useSelector((state: RootState) => state.tag.loading);
    const error = useSelector((state: RootState) => state.tag.error);

    const fetchSeries = useCallback(() => {
        dispatch(fetchSeriesThunk());
    }, [dispatch]);

    const toggleReviewed = (tagId: number) => {
        dispatch(toggleSeriesReviewed({ tagId }));
    };


    return {
        data: tags,
        fetchData: fetchTags,
        loading,
        error,
        toggleReviewed
    };
}
