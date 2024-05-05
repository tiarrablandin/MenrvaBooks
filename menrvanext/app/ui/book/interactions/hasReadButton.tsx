'use client';

import { toggleBookHasRead } from "@/app/lib/services/apiService";
import { updateHasRead } from "@/app/lib/store/bookSlice";
import { RootState, useAppDispatch } from "@/app/lib/store/store";
import { BookOpenIcon } from "@/providers";
import { useSelector } from "react-redux";

interface HasReadButtonProps {
    id: number;
    hasRead: boolean;
    token: string | undefined;
}

const HasReadButton: React.FC<HasReadButtonProps> = ({ id, token, hasRead }) => {
    const dispatch = useAppDispatch();
    const stateHasRead = useSelector((state: RootState) => state.book.interactions.hasRead);

    const handleToggleHasRead = async () => {
        const newHasReadStatus = !stateHasRead;
        dispatch(updateHasRead(newHasReadStatus));

        try {
            await toggleBookHasRead(id, token as string);
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
            dispatch(updateHasRead(hasRead));
        }
    }

    return (
        <>
            {stateHasRead ?
                <BookOpenIcon onClick={handleToggleHasRead} className="h-6 w-6 cursor-pointer text-blue-700" />
                :
                <BookOpenIcon onClick={handleToggleHasRead} className="h-6 w-6 cursor-pointer text-gray-600" />
            }
        </>
    )
}

export default HasReadButton;