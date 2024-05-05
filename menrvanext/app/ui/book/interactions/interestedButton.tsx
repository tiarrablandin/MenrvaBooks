'use client';

import { toggleBookInterested } from "@/app/lib/services/apiService";
import { updateInterested } from "@/app/lib/store/bookSlice";
import { RootState, useAppDispatch } from "@/app/lib/store/store";
import { BookmarkIconOutline } from "@/providers";
import { useSelector } from "react-redux";

interface InterestedButtonProps {
    id: number;
    interested: boolean;
    token: string | undefined;
}

const InterestedButton: React.FC<InterestedButtonProps> = ({ id, token, interested }) => {
    const dispatch = useAppDispatch();
    const stateInterested = useSelector((state: RootState) => state.book.interactions.interested);

    const handleToggleInterested = async () => {
        const newInterestedStatus = !stateInterested;
        dispatch(updateInterested(newInterestedStatus));

        try {
            await toggleBookInterested(id, token as string);
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
            dispatch(updateInterested(interested));
        }
    }

    return (
        <>
            {stateInterested ?
                <BookmarkIconOutline onClick={handleToggleInterested} className="h-6 w-6 cursor-pointer text-blue-700" />
                :
                <BookmarkIconOutline onClick={handleToggleInterested} className="h-6 w-6 cursor-pointer text-gray-600" />
            }
        </>
    )
}

export default InterestedButton;