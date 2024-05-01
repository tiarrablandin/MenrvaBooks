import { useEffect } from "react";
import { setToken, setUserDetails } from "../store/userSlice";
import { useAppDispatch } from "../store/store";

export default function SessionRestorer() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const sessionToken = sessionStorage.getItem('token');
        const userDetails = sessionStorage.getItem('userDetails');

        if (sessionToken) {
            console.log('in if for session token')
            dispatch(setToken(sessionToken));
        }
        if (userDetails) {
            console.log('in if for session user')
            dispatch(setUserDetails(JSON.parse(userDetails)));
        }
    }, [dispatch]);

    return null;
}
