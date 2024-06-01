'use client';
import { fetchUserFollowsAuthor } from "@/lib/services/apiService";
import { updateIsFollowing } from "@/lib/store/features/authorSlice";
import { useAppDispatch } from "@/lib/store/store";
import { useEffect } from "react";

const InitializeUserFollowsAuthor: React.FC<{ id: number, token: string }> = ({ id, token }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchUserFollowsAuthorInfo = async () => {
            const isFollowing = await fetchUserFollowsAuthor(id, token);
            dispatch(updateIsFollowing(isFollowing ? true : false));
        }

        fetchUserFollowsAuthorInfo();
    }, [dispatch]);

    return (
        <></>
    )
}

export default InitializeUserFollowsAuthor;