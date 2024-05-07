'use client'

import { BookInteraction } from "@/app/lib/models/bookInteraction";
import { updateInteractions } from "@/app/lib/store/bookSlice";
import { useAppDispatch } from "@/app/lib/store/store";
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