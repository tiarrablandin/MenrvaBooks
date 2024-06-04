'use client';

import { toggleBookLiked } from "@/lib/store/features/bookSlice";
import { RootState, useAppDispatch } from "@/lib/store/store";
import { ThumbUp, ThumbUpAltOutlined } from "@/providers/coreProviders";
import { useSelector } from "react-redux";

interface ToggleLikeProps {
    id: number;
    token: string | undefined;
}

const ThumbsUpComponent: React.FC<ToggleLikeProps> = ({ id, token }) => {
    const dispatch = useAppDispatch();
    const liked = useSelector((state: RootState) => state.book.interactions.liked);
    const currentBook = useSelector((state: RootState) => state.book.currentBook);

    const handleToggleLike = async () => {
        try {
            dispatch(toggleBookLiked({ bookId: id, status: liked ? 0 : 1, token: token }));
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
        }
    }

    return (
        <>
            {liked ?
                <ThumbUp onClick={handleToggleLike} className="cursor-pointer text-blue-700 hover:text-gray-600" />
                :
                <ThumbUpAltOutlined onClick={handleToggleLike} className="cursor-pointer text-gray-600 hover:text-blue-700 dark:text-old-lace dark:hover:text-blue-700" />
            }
        </>
    )
}

export default ThumbsUpComponent;