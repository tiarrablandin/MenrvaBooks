'use client';

import { toggleBookInterested } from "@/app/lib/store/bookSlice";
import { RootState, useAppDispatch } from "@/app/lib/store/store";
import { BookmarkIconOutline, BookmarkIconSolid } from "@/providers";
import { useSelector } from "react-redux";

interface InterestedButtonProps {
    id: number;
}

const InterestedButton: React.FC<InterestedButtonProps> = ({ id }) => {
    const dispatch = useAppDispatch();
    const interested = useSelector((state: RootState) => state.book.interactions.interested);

    const handleToggleInterested = async () => {
        try {
            dispatch(toggleBookInterested({ bookId: id }));
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
        }
    }

    return (
        <>
            {interested ?
                <BookmarkIconSolid onClick={handleToggleInterested} className="h-6 w-6 cursor-pointer text-blue-700" />
                :
                <BookmarkIconOutline onClick={handleToggleInterested} className="h-6 w-6 cursor-pointer text-gray-800" />
            }
        </>
    )
}

export default InterestedButton;