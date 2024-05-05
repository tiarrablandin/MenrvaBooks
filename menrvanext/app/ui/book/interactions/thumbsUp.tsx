'use client';

import { toggleBookLiked } from "@/app/lib/services/apiService";
import { updateLikeDislike } from "@/app/lib/store/bookSlice";
import { RootState, useAppDispatch } from "@/app/lib/store/store";
import { ThumbUp, ThumbUpAltOutlined } from "@/providers";
import { useSelector } from "react-redux";

interface ToggleLikeProps {
    id: number;
    liked: boolean;
    token: string | undefined;
}

const ThumbsUpComponent: React.FC<ToggleLikeProps> = ({ id, token, liked }) => {
    const dispatch = useAppDispatch();
    const stateLiked = useSelector((state: RootState) => state.book.interactions.liked);

    const handleToggleLike = async () => {
        const newLikedStatus = !stateLiked;
        dispatch(updateLikeDislike({ status: newLikedStatus ? 1 : 0 }));

        try {
            await toggleBookLiked(id, newLikedStatus ? 0 : 1, token as string);
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
            dispatch(updateLikeDislike({ status: liked ? 1 : 0 }));
        }

    }

    return (
        <>
            {stateLiked ?
                <ThumbUp onClick={handleToggleLike} className="cursor-pointer text-blue-700" />
                :
                <ThumbUpAltOutlined onClick={handleToggleLike} className="cursor-pointer text-gray-600" />
            }
        </>
    )
}

export default ThumbsUpComponent;