import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { login as loginUser, logout as logoutUser, setToken, setUserDetails } from "../store/userSlice";

export function useAuth() {
    const dispatch = useAppDispatch();
    const user = useSelector((state: RootState) => state.user.user);
    const token = useSelector((state: RootState) => state.user.jwt);
    const loading = useSelector((state: RootState) => state.user.loading);
    const error = useSelector((state: RootState) => state.user.error);

    useEffect(() => {
        const sessionToken = sessionStorage.getItem('token');
        const userDetails = sessionStorage.getItem('userDetails');

        if (sessionToken && !token) {
            dispatch(setToken(sessionToken));
        }
        if (userDetails && !user) {
            dispatch(setUserDetails(JSON.parse(userDetails)));
        }
    }, [dispatch, token]);

    const login = useCallback(async (identifier: string, password: string) => {
        dispatch(loginUser({ identifier, password }));
    }, [dispatch]);

    const logout = useCallback(() => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userDetails');
        dispatch(logoutUser())
    }, [dispatch]);

    return { user, token, loading, error, login, logout };
}