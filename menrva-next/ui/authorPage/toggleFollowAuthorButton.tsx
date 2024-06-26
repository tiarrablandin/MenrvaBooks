'use client';

import { toggleFollowAuthor } from "@/lib/store/features/authorSlice";
import { RootState, useAppDispatch } from "@/lib/store/store";
import { PlusCircleIcon as PlusCircleIconOutline } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

const ToggleFollowAuthorButton: React.FC<{ id: number, token: string }> = ({ id, token }) => {
    const dispatch = useAppDispatch();
    const isFollowing = useSelector((state: RootState) => state.author.isFollowing);

    const handleToggleIsFollowing = async () => {
        try {
            dispatch(toggleFollowAuthor({ authorId: id, token: token }));
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
        }
    }

    return (
        <>
            {isFollowing ?
                <PlusCircleIcon onClick={handleToggleIsFollowing} className="h-8 w-8 cursor-pointer text-rose hover:text-parchment/70" />
                :
                <PlusCircleIconOutline onClick={handleToggleIsFollowing} className="h-8 w-8 cursor-pointer text-parchment/70 hover:text-rose" />
            }
        </>
    )
}

export default ToggleFollowAuthorButton;