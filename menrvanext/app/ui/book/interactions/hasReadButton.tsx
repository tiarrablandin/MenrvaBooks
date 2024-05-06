'use client';

import { toggleBookHasRead } from "@/app/lib/store/bookSlice";
import { RootState, useAppDispatch } from "@/app/lib/store/store";
import { setToken, setUserDetails } from "@/app/lib/store/userSlice";
import { BookOpenOutline, BookOpenSolid } from "@/providers";
import { useEffect } from "react";
import { useSelector } from "react-redux";

interface HasReadButtonProps {
    id: number;
}

const HasReadButton: React.FC<HasReadButtonProps> = ({ id }) => {
    const dispatch = useAppDispatch();
    const hasRead = useSelector((state: RootState) => state.book.interactions.hasRead);

    const handleToggleHasRead = async () => {
        try {
            dispatch(toggleBookHasRead({ bookId: id }));
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
        }
    }


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
        <>
            {hasRead ?
                <BookOpenSolid onClick={handleToggleHasRead} className="h-6 w-6 cursor-pointer text-blue-700" />
                :
                <BookOpenOutline onClick={handleToggleHasRead} className="h-6 w-6 cursor-pointer text-gray-600" />
            }
        </>
    )
}

export default HasReadButton;