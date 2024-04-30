import { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { fetchUsersThunk, toggleUserActive } from "../store/userSlice";

export function useUsers() {
    const dispatch = useAppDispatch();
    const users = useSelector((state: RootState) => state.user.allUsers);
    const loading = useSelector((state: RootState) => state.user.loading);
    const error = useSelector((state: RootState) => state.user.error);
    const token = useSelector((state: RootState) => state.user.jwt)

    const fetchUsers = useCallback(() => {
        dispatch(fetchUsersThunk());
    }, [dispatch]);

    const toggleActive = useCallback((id: number) => {
        console.log('toggleActive called with id:', id); // Debug output
        dispatch(toggleUserActive({ userId: id, token }));
    }, [dispatch, token]);

    return {
        data: users,
        loading,
        error,
        fetchData: fetchUsers,
        toggleActive: toggleActive,
    };
}