import { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { fetchUsersThunk, setToken } from "../store/userSlice";

export function useUsers() {
    const dispatch = useAppDispatch();
    const users = useSelector((state: RootState) => state.user.allUsers);
    const loading = useSelector((state: RootState) => state.user.loading);
    const error = useSelector((state: RootState) => state.user.error);

    const fetchUsers = useCallback(() => {
        dispatch(fetchUsersThunk());
    }, [dispatch]);

    return {
        data: users,
        loading,
        error,
        fetchData: fetchUsers,
    };
}