import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../store/store";
import { fetchSubgenresThunk, toggleSubgenreReviewed } from "../store/features/subgenreSlice";

export function useSubgenres() {
    const dispatch = useAppDispatch();
    const genres = useSelector((state: RootState) => state.subgenre.allSubgenres);
    const loading = useSelector((state: RootState) => state.subgenre.loading);
    const error = useSelector((state: RootState) => state.subgenre.error);

    const fetchSubgenres = useCallback(() => {
        dispatch(fetchSubgenresThunk());
    }, [dispatch]);

    const toggleReviewed = (subgenreId: number) => {
        dispatch(toggleSubgenreReviewed({ subgenreId }));
    };

    return {
        data: genres,
        fetchData: fetchSubgenres,
        loading,
        error,
        toggleReviewed
    };
}