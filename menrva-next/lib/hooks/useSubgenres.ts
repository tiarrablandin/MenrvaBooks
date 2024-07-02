import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../store/store";
import { fetchSubgenresThunk, toggleSubgenreReviewed } from "../store/features/subgenreSlice";
import { url } from "@/providers/coreProviders";

export function useSubgenres() {
    const dispatch = useAppDispatch();
    const genres = useSelector((state: RootState) => state.subgenre.allSubgenres);
    const loading = useSelector((state: RootState) => state.subgenre.loading);
    const error = useSelector((state: RootState) => state.subgenre.error);
    const token = useSelector((state: RootState) => state.user.jwt)

    const fetchSubgenres = useCallback(() => {
        dispatch(fetchSubgenresThunk());
    }, [dispatch]);

    const toggleReviewed = (subgenreId: number) => {
        dispatch(toggleSubgenreReviewed({ subgenreId }));
    };

    const deleteEntity = useCallback(async (subgenreId: number) => {
        const res = await fetch(`${url}/subgenres/${subgenreId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await res.json()
        return { deleted: data.deleted }
    }, [dispatch, token])

    return {
        data: genres,
        fetchData: fetchSubgenres,
        loading,
        error,
        toggleReviewed,
        deleteEntity,
    };
}