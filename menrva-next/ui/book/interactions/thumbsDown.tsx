'use client';

import { toggleBookLiked, updateLikeDislike } from "@/lib/store/features/bookSlice";
import { RootState, useAppDispatch } from "@/lib/store/store";
import { HandThumbDownIcon, HandThumbDownIconOutlined, } from "@/providers/coreProviders";
import { useState } from "react";
import { useSelector } from "react-redux";

interface ToggleLikeProps {
    id: number;
    token: string | undefined;
    initialDislikes: number;
}

const ThumbsDownComponent: React.FC<ToggleLikeProps> = ({ id, token, initialDislikes }) => {
    const dispatch = useAppDispatch();
    const [dislikes, setDislikes] = useState(initialDislikes);
    const [disliked, setIsDisliked] = useState(useSelector((state: RootState) => state.book.interactions.disliked));

    const handleToggleLike = async () => {
        try {
            dispatch(toggleBookLiked({ bookId: id, status: disliked ? 0 : -1, token: token }));
            setDislikes(disliked ? dislikes - 1 : dislikes + 1);
            setIsDisliked(disliked ? false : true);
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
        }
    }

    return (
        <>
            <div className="text-2xl font-bold">{dislikes}</div>
            {disliked ?
                <HandThumbDownIcon onClick={handleToggleLike} className="cursor-pointer text-eggplant dark:text-rose hover:text-gray-600 dark:hover:text-gray-600" />
                :
                <HandThumbDownIconOutlined onClick={handleToggleLike} className="cursor-pointer text-gray-600 hover:text-eggplant dark:hover:text-rose" />
            }
        </>
    )
}

export default ThumbsDownComponent;