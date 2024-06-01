'use client'

import { BookInteraction } from "@/lib/models/bookInteraction";
import { updateInteractions } from "@/lib/store/features/bookSlice";
import { useAppDispatch } from "@/lib/store/store";
import { useEffect } from "react";

interface InitializeInteractionsProps {
    interactions: BookInteraction;
}

const InitializeInteractions: React.FC<InitializeInteractionsProps> = ({ interactions }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(updateInteractions(interactions));
    }, [dispatch])

    return (
        <></>
    )
}

export default InitializeInteractions;