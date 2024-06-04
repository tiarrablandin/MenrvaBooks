'use client';
import { updateIsFollowing } from "@/lib/store/features/authorSlice";
import { useAppStore } from "@/lib/store/store";
import { useEffect, useRef } from "react";

const InitializeUserFollowsAuthor: React.FC<{ isFollowing: boolean }> = ({ isFollowing }) => {
    const store = useAppStore();
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current) {
            store.dispatch(updateIsFollowing(isFollowing ? true : false));
            initialized.current = true;
        }
    }, [initialized, store])

    return (
        <></>
    )
}

export default InitializeUserFollowsAuthor;