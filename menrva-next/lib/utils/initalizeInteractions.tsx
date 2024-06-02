'use client'

import { BookInteraction } from "@/lib/models/bookInteraction";
import { updateInteractions } from "@/lib/store/features/bookSlice";
import { useAppStore } from "@/lib/store/store";
import { useEffect, useRef } from "react";

interface InitializeInteractionsProps {
    interactions: BookInteraction;
}

const InitializeInteractions: React.FC<InitializeInteractionsProps> = ({ interactions }) => {
    const store = useAppStore();
    const initialized = useRef(false);


    useEffect(() => {
        if (!initialized.current) {
            store.dispatch(updateInteractions(interactions))
            initialized.current = true;
        }
    }, [interactions, initialized, store])

    return (
        <></>
    )
}

export default InitializeInteractions;