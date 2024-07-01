import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";
import { fetchTagsThunk, toggleTagReviewed } from "../store/features/tagSlice";
import { url } from "@/providers/coreProviders";

export function useTags() {
    const dispatch = useAppDispatch();
    const tags = useSelector((state: RootState) => state.tag.allTags);
    const loading = useSelector((state: RootState) => state.tag.loading);
    const error = useSelector((state: RootState) => state.tag.error);
    const token = useSelector((state: RootState) => state.user.jwt);

    const fetchTags = useCallback(() => {
        dispatch(fetchTagsThunk());
    }, [dispatch]);

    const toggleReviewed = (tagId: number) => {
        dispatch(toggleTagReviewed({ tagId }));
    };

    const deleteEntity = useCallback(async (tagId: number) => {
        const res = await fetch(`${url}/tags/${tagId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await res.json()
        return { deleted: data.deleted }
    }, [dispatch, token])

    return {
        data: tags,
        fetchData: fetchTags,
        loading,
        error,
        toggleReviewed,
        deleteEntity,
    };
}