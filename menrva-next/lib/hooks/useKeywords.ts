import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";
import { fetchKeywordsThunk, toggleKeywordReviewed } from "../store/features/keywordSlice";
import { url } from "@/providers/coreProviders";

export function useKeywords() {
    const dispatch = useAppDispatch();
    const keywords = useSelector((state: RootState) => state.keyword.allKeywords);
    const loading = useSelector((state: RootState) => state.keyword.loading);
    const error = useSelector((state: RootState) => state.keyword.error);
    const token = useSelector((state: RootState) => state.user.jwt);

    const fetchKeywords = useCallback(() => {
        dispatch(fetchKeywordsThunk());
    }, [dispatch]);

    const toggleReviewed = (keywordId: number) => {
        dispatch(toggleKeywordReviewed({ keywordId }));
    };

    const deleteEntity = useCallback(async (keywordId: number) => {
        const res = await fetch(`${url}/keywords/${keywordId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await res.json()
        return { deleted: data.deleted }
    }, [dispatch, token])

    return {
        data: keywords,
        fetchData: fetchKeywords,
        loading,
        error,
        toggleReviewed,
        deleteEntity,
    };
}