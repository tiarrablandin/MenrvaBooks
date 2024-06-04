import { ArrowLeftIcon, ArrowRightIcon, Button, IconButton } from "@/providers/coreProviders";
import React from "react";

function paginationRange(currentPage: number, totalPages: number) {
    const delta = 2;
    const range = [];
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
        range.push(i);
    }

    if (currentPage - delta > 2) {
        range.unshift("...");
    }
    if (currentPage + delta < totalPages - 1) {
        range.push("...");
    }

    range.unshift(1);
    if (totalPages > 1) range.push(totalPages);

    return range;
}


interface PaginationProps {
    onPageChange: (page: number) => void;
    totalPages: number;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange, totalPages, currentPage }) => {
    const pages = paginationRange(currentPage, totalPages);

    const getItemProps = (index: number) => ({
        variant: currentPage === index ? "filled" : "text",
        color: "gray",
        onClick: () => onPageChange(index),
        className: "rounded-full",
        children: index,
    });

    const next = () => {
        if (currentPage === totalPages) return;
        onPageChange(currentPage + 1);
    };

    const prev = () => {
        if (currentPage === 1) return;
        onPageChange(currentPage - 1);
    };

    return (
        <div className="flex items-center gap-4 mx-auto w-min">
            <Button
                variant="text"
                className="flex items-center gap-2 rounded-full"
                onClick={prev}
                disabled={currentPage === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
                {pages.map((page, index) =>
                    page === "..." ? (
                        <span key={index} className="px-2 text-onyx">...</span>
                    ) : (
                        <IconButton {...getItemProps(page as number) as any} key={index}>
                            {page}
                        </IconButton>
                    )
                )}
            </div>
            <Button
                variant="text"
                className="flex items-center gap-2 rounded-full"
                onClick={next}
                disabled={currentPage === totalPages}
            >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}

export default Pagination;