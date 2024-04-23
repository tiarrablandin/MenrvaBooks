'use client';

import { Button, Switch, Typography } from "@/providers";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import Pagination from "../../pagination";
import AdminTable from "./adminTable";
import { tableConfig } from "./tableConfig";
import { useBooks } from "@/app/lib/hooks/useBooks";
import { useAuthors } from "@/app/lib/hooks/useAuthors";
import { useUsers } from "@/app/lib/hooks/useUsers";

interface DynamicTableProps<T> {
    entityType: string;
    variant?: 'small' | 'normal';
    componentProps?: T;
}

const DynamicTable: React.FC<DynamicTableProps<any>> = ({ entityType, variant }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, _setItemsPerPage] = useState(10);
    const [showUnreviewedOnly, setShowUnreviewedOnly] = useState(false);
    const { data, fetchData, toggleReviewed, loading, error } = useEntityHook<any>(entityType);

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
        fetchData();
    }, [fetchData, entityType]);

    return (
        <AdminTable
            head={tableConfig[entityType].pageTitle}
            headDesc={tableConfig[entityType].description}
            add={<Link href={tableConfig[entityType].addLink}><Button>Add {entityType.slice(0, -1)}</Button></Link>}
            reviewedToggle={
                <Switch
                    checked={showUnreviewedOnly}
                    onChange={(e) => setShowUnreviewedOnly(e.target.checked)}
                    label={ <Typography variant="lead"> Reviewed </Typography> }
                    className="before:h-8 before:w-8 checked:bg-eggplant"
                />
            }
            tableHeaders={tableConfig[entityType].columns}
            data={currentItems}
            renderRow={tableConfig[entityType].renderRow} // Assuming renderRow is also defined in config
            pagination={<Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />}
            reviewedCallback={toggleReviewed}
            variant={variant}
        />
    );
};

export default DynamicTable;


interface EntityData<T> {
    data: T[];  // need to use a more specific type or generics
    fetchData: () => void;
    toggleReviewed?: (id: number) => void;
    loading: boolean;
    error: string | null;
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
        // add cases for other entity types
        default:
            throw new Error('Unsupported entity type');
    }
}
