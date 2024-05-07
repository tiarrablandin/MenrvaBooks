'use client';

import { toggleBookLiked } from "@/app/lib/store/bookSlice";
import { RootState, useAppDispatch } from "@/app/lib/store/store";
import { ThumbUp, ThumbUpAltOutlined } from "@/providers";
import { useSelector } from "react-redux";

interface ToggleLikeProps {
    id: number;
}

const ThumbsUpComponent: React.FC<ToggleLikeProps> = ({ id }) => {
    const dispatch = useAppDispatch();
    const liked = useSelector((state: RootState) => state.book.interactions.liked);

    const handleToggleLike = async () => {
        dispatch(toggleBookLiked({ bookId: id, status: liked ? 0 : 1 }));

        try {
            dispatch(toggleBookLiked({ bookId: id, status: liked ? 0 : 1 }));
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
        }
    }

    return (
        <>
            {liked ?
                <ThumbUp onClick={handleToggleLike} className="cursor-pointer text-blue-700" />
                :
                <ThumbUpAltOutlined onClick={handleToggleLike} className="cursor-pointer text-gray-600" />
            }
        </>
    )
}

export default ThumbsUpComponent;