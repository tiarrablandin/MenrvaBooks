'use client';

import { toggleFollowAuthor } from "@/lib/store/features/authorSlice";
import { useAppDispatch } from "@/lib/store/store";
import { PlusCircleIcon as PlusCircleIconOutline } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const ToggleFollowAuthorButton: React.FC<{ id: number, token: string, isFollowing: boolean }> = ({ id, token, isFollowing }) => {
    const dispatch = useAppDispatch();
    const [updatedIsFollowing, setUpdatedIsFollowing] = useState(isFollowing);

    const handleToggleIsFollowing = async () => {
        try {
            setUpdatedIsFollowing(!updatedIsFollowing);
            dispatch(toggleFollowAuthor({ authorId: id, token: token }));
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
        }
    }

    return (
        <>
            {updatedIsFollowing ?
                <PlusCircleIcon onClick={handleToggleIsFollowing} className="h-8 w-8 cursor-pointer text-rose hover:text-parchment/70" />
                :
                <PlusCircleIconOutline onClick={handleToggleIsFollowing} className="h-8 w-8 cursor-pointer text-parchment/70 hover:text-rose" />
            }
        </>
    )
}

export default ToggleFollowAuthorButton;