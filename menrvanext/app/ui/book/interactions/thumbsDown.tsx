'use client';

import { toggleBookLiked, updateLikeDislike } from "@/app/lib/store/bookSlice";
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
    const handleToggleLike = () => {
        const status = disliked === true ? 0 : -1;
        if (token) toggleBookLiked({ bookId: id, status: status, token });
        dispatch(updateLikeDislike({ status: status }));
    }

    return (
        <>
            {disliked ?
                <ThumbDown onClick={handleToggleLike} style={{ color: "red" }} className="cursor-pointer" />
                :
                <ThumbDownAltOutlined onClick={handleToggleLike} style={{ color: "gray" }} className="cursor-pointer" />
            }
        </>
    )
}

export default ThumbsDownComponent;