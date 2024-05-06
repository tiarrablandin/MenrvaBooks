'use client';

import { useAppDispatch } from "@/app/lib/store/store";
import { setToken, setUserDetails } from "@/app/lib/store/userSlice";
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
                console.log("************" + data.jwt);
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