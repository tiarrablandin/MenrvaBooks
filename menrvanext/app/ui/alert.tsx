'use client';

import { Alert, IconButton, ThumbUp, XMarkIcon } from "@/providers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DefaultAlert = ({ text, defaultIsOpen, className }: { text: string, defaultIsOpen: boolean, className?: string }) => {
    const [isOpen, setIsOpen] = useState(defaultIsOpen);
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsOpen(false);
                router.back();
            }, 3000); // Hide after 3000 ms (3 seconds)
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        if (defaultIsOpen) {
            setIsOpen(defaultIsOpen);
        }
    }, [defaultIsOpen])

    const onClose = () => {
        router.back();
        setIsOpen(false);
    }

    return (
        <>
            <Alert
                variant="gradient"
                className={`${className} absolute left-1/2 transform -translate-x-1/2 h-16 w-full max-w-md flex justify-between items-center`}
                open={isOpen}
                onClose={onClose}
                icon={<ThumbUp />}
                action={<IconButton variant="text" color='white' onClick={onClose}><XMarkIcon className="w-5 h-5"/></IconButton>}
            >
                {text}
            </Alert >
        </>
    )
}

export default DefaultAlert;