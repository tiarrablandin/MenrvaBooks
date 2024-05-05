'use client';

import { toggleBookLiked } from "@/app/lib/services/apiService";
import { updateLikeDislike } from "@/app/lib/store/bookSlice";
import { RootState, useAppDispatch } from "@/app/lib/store/store";
import { ThumbDown, ThumbDownAltOutlined } from "@/providers";
import { useSelector } from "react-redux";

interface ToggleLikeProps {
    id: number;
    disliked: boolean;
    token: string | undefined;
}

const ThumbsDownComponent: React.FC<ToggleLikeProps> = ({ id, disliked, token }) => {
    const dispatch = useAppDispatch();
    const stateDisliked = useSelector((state: RootState) => state.book.interactions.disliked);

    const handleToggleLike = async () => {
        const newDislikedStatus = !stateDisliked;
        dispatch(updateLikeDislike({ status: newDislikedStatus ? -1 : 0 }));

        try {
            await toggleBookLiked(id, newDislikedStatus ? -1 : 0, token as string);
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
            dispatch(updateLikeDislike({ status: disliked ? -1 : 0 }));
        }

    }

    return (
        <>
            {stateDisliked ?
                <ThumbDown onClick={handleToggleLike} style={{ color: "red" }} className="cursor-pointer" />
                :
                <ThumbDownAltOutlined onClick={handleToggleLike} style={{ color: "gray" }} className="cursor-pointer" />
            }
        </>
    )
}

export default ThumbsDownComponent;