'use client';

import { toggleBookInterested } from "@/lib/store/features/bookSlice";
import { RootState, useAppDispatch } from "@/lib/store/store";
import { BookmarkIconOutline, BookmarkIcon } from "@/providers/coreProviders";
import { useSelector } from "react-redux";

interface InterestedButtonProps {
    id: number;
    token: string | undefined;
}

const InterestedButton: React.FC<InterestedButtonProps> = ({ id, token }) => {
    const dispatch = useAppDispatch();
    const interested = useSelector((state: RootState) => state.book.interactions.interested);

    const handleToggleInterested = async () => {
        try {
            dispatch(toggleBookInterested({ bookId: id, token: token }));
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
        }
    }

    return (
        <>
            {interested ?
                <BookmarkIcon onClick={handleToggleInterested} className="h-6 w-6 cursor-pointer text-eggplant dark:text-rose hover:text-gray-600 dark:hover:text-gray-600" />
                :
                <BookmarkIconOutline onClick={handleToggleInterested} className="h-6 w-6 cursor-pointer text-gray-600 hover:text-eggplant dark:hover:text-rose" />
            }
        </>
    )
}

export default InterestedButton;