'use client';

import { toggleBookLiked, updateLikeDislike } from "@/lib/store/features/bookSlice";
import { RootState, useAppDispatch } from "@/lib/store/store";
import { ThumbDown, ThumbDownAltOutlined } from "@/providers/coreProviders";
import { useSelector } from "react-redux";

interface ToggleLikeProps {
    id: number;
}

const ThumbsDownComponent: React.FC<ToggleLikeProps> = ({ id }) => {
    const dispatch = useAppDispatch();
    const disliked = useSelector((state: RootState) => state.book.interactions.disliked);

    const handleToggleLike = async () => {
        dispatch(updateLikeDislike({ status: disliked ? 0 : -1 }));

        try {
            dispatch(toggleBookLiked({ bookId: id, status: disliked ? 0 : -1 }));
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
        }
    }

    return (
        <>
            {disliked ?
                <ThumbDown onClick={handleToggleLike} style={{ color: "red" }} className="cursor-pointer" />
                :
                <ThumbDownAltOutlined onClick={handleToggleLike} className="cursor-pointer text-gray-600 hover:text-red-500" />
            }
        </>
    )
}

export default ThumbsDownComponent;