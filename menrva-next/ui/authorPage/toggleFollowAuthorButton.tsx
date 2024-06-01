'use client';

import { toggleFollowAuthor } from "@/lib/store/features/authorSlice";
import { RootState, useAppDispatch } from "@/lib/store/store";
import { PlusCircleIcon as PlusCircleIconOutline } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

const ToggleFollowAuthorButton: React.FC<{ id: number }> = ({ id }) => {
    const dispatch = useAppDispatch();
    const isFollowing = useSelector((state: RootState) => state.author.isFollowing);

    const handleToggleIsFollowing = async () => {
        try {
            dispatch(toggleFollowAuthor({ authorId: id }));
        } catch (error) {
            console.error("Failed to toggle like on server, rolling back", error);
        }
    }

    return (
        <>
            {isFollowing ?
                <PlusCircleIcon onClick={handleToggleIsFollowing} className="h-8 w-8 cursor-pointer text-blue-700" />
                :
                <PlusCircleIconOutline onClick={handleToggleIsFollowing} className="h-8 w-8 cursor-pointer text-gray-600" />
            }
        </>
    )
}

export default ToggleFollowAuthorButton;