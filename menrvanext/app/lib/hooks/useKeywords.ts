import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";
import { fetchKeywordsThunk, toggleKeywordReviewed } from "../store/keywordSlice";

export function useKeywords() {
    const dispatch = useAppDispatch();
    const keywords = useSelector((state: RootState) => state.keyword.allKeywords);
    const loading = useSelector((state: RootState) => state.keyword.loading);
    const error = useSelector((state: RootState) => state.keyword.error);

    const fetchKeywords = useCallback(() => {
        dispatch(fetchKeywordsThunk());
    }, [dispatch]);

    const toggleReviewed = (keywordId: number) => {
        dispatch(toggleKeywordReviewed({ keywordId }));
    };


    return {
        data: keywords,
        fetchData: fetchKeywords,
        loading,
        error,
        toggleReviewed
    };
}