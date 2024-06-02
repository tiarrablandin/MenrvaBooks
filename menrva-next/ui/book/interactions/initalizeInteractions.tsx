'use client'

import { BookInteraction } from "@/lib/models/bookInteraction";
import { updateInteractions } from "@/lib/store/features/bookSlice";
import { useAppDispatch, useAppStore } from "@/lib/store/store";
import { useEffect, useRef } from "react";

interface InitializeInteractionsProps {
    interactions: BookInteraction;
}

const InitializeInteractions: React.FC<InitializeInteractionsProps> = ({ interactions }) => {
    const store = useAppStore();
    const initialized = useRef(false);


    // const dispatch = useAppDispatch();

    useEffect(() => {
        if (!initialized.current) {
            console.log("############ " + interactions);
            store.dispatch(updateInteractions(interactions))
            initialized.current = true;
        }
    }, [interactions, initialized])

    return (
        <></>
    )
}

export default InitializeInteractions;