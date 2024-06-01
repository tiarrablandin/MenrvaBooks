'use client';

import { useAppDispatch } from "@/lib/store/store";
import { setToken, setUserDetails } from "@/lib/store/features/userSlice";
import { useEffect } from "react";

interface InitializeUserCredentialsProps {
}

const InitializeUserCredentials: React.FC<InitializeUserCredentialsProps> = ({ }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchUserInfo = async () => {
            const res = await fetch('/api/validateToken');
            if (res.ok) {
                const data = await res.json();
                dispatch(setUserDetails(data.user));
                dispatch(setToken(data.jwt));
            }
        }

        fetchUserInfo();
    }, [dispatch]);

    return (
        <></>
    )
}

export default InitializeUserCredentials;