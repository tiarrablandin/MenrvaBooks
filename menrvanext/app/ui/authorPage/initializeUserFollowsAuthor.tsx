'use client';
import { fetchUserFollowsAuthor } from "@/app/lib/services/apiService";
import { updateIsFollowing } from "@/app/lib/store/authorSlice";
import { RootState, useAppDispatch } from "@/app/lib/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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