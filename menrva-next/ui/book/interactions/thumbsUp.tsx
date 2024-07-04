'use client';

import { toggleBookLiked } from "@/lib/store/features/bookSlice";
import { RootState, useAppDispatch } from "@/lib/store/store";
import { HandThumbUpIcon, HandThumbUpIconOutlined } from "@/providers/coreProviders";
import { useState } from "react";
import { useSelector } from "react-redux";

interface ToggleLikeProps {
    id: number;
    token: string | undefined;
    initialLikes: number;
}

const ThumbsUpComponent: React.FC<ToggleLikeProps> = ({ id, token, initialLikes }) => {
    const dispatch = useAppDispatch();
    const [likes, setLikes] = useState(initialLikes);
    const [liked, setIsLiked] = useState(useSelector((state: RootState) => state.book.interactions.liked));

    const handleToggleLike = async () => {
        try {
            dispatch(toggleBookLiked({ bookId: id, status: liked ? 0 : 1, token: token }));
            setLikes(prevLikes => liked ? prevLikes - 1 : prevLikes + 1);
            setIsLiked(liked ? false : true);
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
        }
    }

    return (
        <>
            <div className="text-2xl font-bold">{likes}</div>
            {liked ?
                <HandThumbUpIcon onClick={handleToggleLike} className="h-6 w-6 cursor-pointer text-eggplant dark:text-rose hover:text-gray-600 dark:hover:text-gray-600" />
                :
                <HandThumbUpIconOutlined onClick={handleToggleLike} className="h-6 w-6 cursor-pointer text-gray-600 hover:text-eggplant dark:hover:text-rose" />
            }
        </>
    )
}

export default ThumbsUpComponent;