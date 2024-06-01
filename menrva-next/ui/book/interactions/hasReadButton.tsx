'use client';

import { toggleBookHasRead } from "@/lib/store/features/bookSlice";
import { RootState, useAppDispatch } from "@/lib/store/store";
import { BookOpenOutline, BookOpenSolid } from "@/providers/coreProviders";
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

    return (
        <>
            {hasRead ?
                <BookOpenSolid onClick={handleToggleHasRead} className="h-6 w-6 cursor-pointer hover:text-gray-600 text-blue-700" />
                :
                <BookOpenOutline onClick={handleToggleHasRead} className="h-6 w-6 cursor-pointer hover:text-blue-700 text-gray-600" />
            }
        </>
    )
}

export default HasReadButton;