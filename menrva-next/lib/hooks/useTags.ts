import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";
import { fetchTagsThunk, toggleTagReviewed } from "../store/features/tagSlice";

export function useTags() {
    const dispatch = useAppDispatch();
    const tags = useSelector((state: RootState) => state.tag.allTags);
    const loading = useSelector((state: RootState) => state.tag.loading);
    const error = useSelector((state: RootState) => state.tag.error);

    const fetchTags = useCallback(() => {
        dispatch(fetchTagsThunk());
    }, [dispatch]);

    const toggleReviewed = (tagId: number) => {
        dispatch(toggleTagReviewed({ tagId }));
    };


    return {
        data: tags,
        fetchData: fetchTags,
        loading,
        error,
        toggleReviewed
    };
}