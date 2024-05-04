'use client';

import { toggleBookLiked, updateLikeDislike } from "@/app/lib/store/bookSlice";
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
    const handleToggleLike = () => {
        const status = liked === true ? 0 : 1;
        if (token) dispatch(toggleBookLiked({ bookId: id, status: status, token }));
        dispatch(updateLikeDislike({ status: status }));
    }

    return (
        <>
            {liked ?
                <ThumbUp onClick={handleToggleLike} style={{ color: "blue" }} className="cursor-pointer" />
                :
                <ThumbUpAltOutlined onClick={handleToggleLike} style={{ color: "gray" }} className="cursor-pointer" />
            }
        </>
    )
}

export default ThumbsUpComponent;