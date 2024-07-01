import { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { fetchUsersThunk, toggleUserActive } from "../store/features/userSlice";
import { url } from "@/providers/coreProviders";

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
        dispatch(toggleUserActive({ userId: id, token }));
    }, [dispatch, token]);

    const deleteEntity = useCallback(async (userId: number) => {
        const res = await fetch(`${url}/users/${userId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await res.json()
        return { deleted: data.deleted }
    }, [dispatch, token])

    return {
        data: users,
        loading,
        error,
        fetchData: fetchUsers,
        toggleActive: toggleActive,
        deleteEntity,
    };
}