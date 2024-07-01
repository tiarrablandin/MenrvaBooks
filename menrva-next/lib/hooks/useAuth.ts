import { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { logout as logoutUser } from "../store/features/userSlice";
import login from "../actions/user/login";

export function useAuth() {
    const dispatch = useAppDispatch();
    const user = useSelector((state: RootState) => state.user.user);
    const token = useSelector((state: RootState) => state.user.jwt);
    const loading = useSelector((state: RootState) => state.user.loading);
    const error = useSelector((state: RootState) => state.user.error);

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         const response = await fetch('/api/validateToken');
    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log(data);
    //             sessionStorage.setItem('token', data.token);
    //             sessionStorage.setItem('userDetails', data.user);
    //             dispatch(setToken(data.token));
    //             dispatch(setUserDetails(JSON.parse(data.user)));
    //         } else {
    //             console.error('Failed to fetch user data');
    //         }
    //     }

    //     fetchUserData();
    // }, [dispatch]);

    // const loginUser = useCallback(async (identifier: string, password: string) => {
    //     console.log('in loginUser');
        
    //     // dispatch(loginUser({ identifier, password }));
    // }, [dispatch]);

    const logout = useCallback(() => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userDetails');
        dispatch(logoutUser())
    }, [dispatch]);

    return { user, token, loading, error, loginUser: login, logout };
}