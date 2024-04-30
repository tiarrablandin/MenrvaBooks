/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useAuthors } from "@/app/lib/hooks/useAuthors";
import { useBooks } from "@/app/lib/hooks/useBooks";
import { useComments } from "@/app/lib/hooks/useComments";
import { useGenres } from "@/app/lib/hooks/useGenres";
import { useKeywords } from "@/app/lib/hooks/useKeywords";
import { useSeries } from "@/app/lib/hooks/useSeries";
import { useTags } from "@/app/lib/hooks/useTags";
import { useUsers } from "@/app/lib/hooks/useUsers";
import { Button, PlusIcon, Switch, Typography } from "@/providers";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import Pagination from "../../pagination";
import AdminTable from "./adminTable";
import { tableConfig } from "./tableConfig";

interface DynamicTableProps<T> {
    entityType: string;
    variant?: 'small' | 'normal';
    componentProps?: T;
}

const DynamicTable: React.FC<DynamicTableProps<any>> = ({ entityType, variant }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, _setItemsPerPage] = useState(10);
    const [showUnreviewedOnly, setShowUnreviewedOnly] = useState(false);
    const { data, fetchData, toggleReviewed, toggleActive, loading, error } = useEntityHook<any>(entityType);

    const currentItems = useMemo(() =>
        data.filter((item: any) => !showUnreviewedOnly || !item.reviewed)
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
        [data, showUnreviewedOnly, currentPage, itemsPerPage]
    );
    const totalItems = useMemo(() =>
        data.filter((item: any) => !showUnreviewedOnly || !item.reviewed).length,
        [data, showUnreviewedOnly]
    );
    const totalPages = Math.ceil(totalItems / itemsPerPage);


    useEffect(() => {
        console.log(toggleActive)
        fetchData();
    }, [fetchData, entityType]);

    return (
        <AdminTable
            head={tableConfig[entityType].pageTitle}
            headDesc={tableConfig[entityType].description}
            add={<Link href={tableConfig[entityType].addLink} className="w-min"><PlusIcon className="w-5 h-5 bg-clip-text" /></Link>}
            reviewedToggle={
                <Switch
                    checked={showUnreviewedOnly}
                    onChange={(e) => setShowUnreviewedOnly(e.target.checked)}
                    label={<Typography variant="lead"> Reviewed </Typography>}
                    className="before:h-8 before:w-8 checked:bg-eggplant"
                />
            }
            tableHeaders={tableConfig[entityType].columns}
            data={currentItems}
            renderRow={tableConfig[entityType].renderRow} // Assuming renderRow is also defined in config
            pagination={<Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />}
            reviewedCallback={toggleReviewed}
            activeCallback={toggleActive}
            variant={variant}
        />
    );
};

export default DynamicTable;


interface EntityData<T> {
    data: T[];
    fetchData: () => void;
    toggleReviewed?: (id: number) => void;
    toggleActive?: (id: number) => void;
    loading: boolean;
    error: string | null;
    toggleLiked?: (bookId: number, status: number) => void;
    fetchLikedStatus?: (bookId: number) => void;
    likedBooks?: number[];
}

// useEntityHook is a function that returns the correct hook based on entityType
function useEntityHook<T>(entityType: string): EntityData<T> {
    switch (entityType) {
        case 'books':
            return useBooks() as EntityData<T>;
        case 'authors':
            return useAuthors() as EntityData<T>;
        case 'users':
            return useUsers() as EntityData<T>;
        case 'genres':
            return useGenres() as EntityData<T>;
        case 'tags':
            return useTags() as EntityData<T>;
        case 'keywords':
            return useKeywords() as EntityData<T>;
        case 'series':
            return useSeries() as EntityData<T>;
        case 'comments':
            return useComments() as EntityData<T>;
        default:
            throw new Error('Unsupported entity type');
    }
}
