/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useAuthors } from "@/lib/hooks/useAuthors";
import { useBooks } from "@/lib/hooks/useBooks";
import { useComments } from "@/lib/hooks/useComments";
import { useGenres } from "@/lib/hooks/useGenres";
import { useKeywords } from "@/lib/hooks/useKeywords";
import { useSeries } from "@/lib/hooks/useSeries";
import { useSubgenres } from "@/lib/hooks/useSubgenres";
import { useTags } from "@/lib/hooks/useTags";
import { useUsers } from "@/lib/hooks/useUsers";
import { Switch, Typography } from "@/providers/coreProviders";
import React, { useEffect, useMemo, useState } from "react";
import Pagination from "../../pagination";
import AdminTable from "./adminTable";
import { tableConfig } from "./tableConfig";

interface DynamicTableProps<T> {
  entityType: string;
  variant?: "small" | "normal";
  componentProps?: T;
}

const DynamicTable: React.FC<DynamicTableProps<any>> = ({ entityType, variant }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, _setItemsPerPage] = useState(10);
  const [showUnreviewedOnly, setShowUnreviewedOnly] = useState(false);
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const { data, fetchData, toggleReviewed, toggleActive, loading, error } = useEntityHook<any>(entityType);

  const currentItems = useMemo(
    () =>
      data
        .filter((item: any) => !showUnreviewedOnly || !item.reviewed)
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [data, showUnreviewedOnly, currentPage, itemsPerPage]
  );

  const totalItems = useMemo(
    () => data.filter((item: any) => !showUnreviewedOnly || !item.reviewed).length,
    [data, showUnreviewedOnly]
  );

  const activeUsers = useMemo(
    () =>
      data
        .filter((user: any) => !showActiveOnly || user.active),
    [data, toggleActive]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    fetchData();
  }, [fetchData, entityType]);

  return (
    <AdminTable
      head={tableConfig[entityType].pageTitle}
      headDesc={tableConfig[entityType].description}
      
      reviewedToggle={
        <Switch
          checked={showUnreviewedOnly}
          onChange={(e) => setShowUnreviewedOnly(e.target.checked)}
          label={<p>Reviewed</p>}
          className="before:h-8 before:w-8 checked:bg-eggplant"
        />
      }
      activeToggle={
        <Switch
          checked={showActiveOnly}
          onChange={(e) => setShowActiveOnly(e.target.checked)}
          label={<p>Active</p>}
          className="before:h-8 before:w-8 checked:bg-eggplant"
        />
      }
      tableHeaders={tableConfig[entityType].columns}
      data={showActiveOnly ? activeUsers : currentItems}
      renderRow={tableConfig[entityType].renderRow} // Assuming renderRow is also defined in config
      pagination={
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      }
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
  fetchBookInteractions?: (bookId: number) => void;
  likedBooks?: number[];
  fetchBookDetails: (bookId: number) => void;
  currentBook?: T;
  toggleFavorite?: (id: number) => void;
  toggleInterested?: (id: number) => void;
  toggleHasRead?: (id: number) => void;
}

// useEntityHook is a function that returns the correct hook based on entityType
function useEntityHook<T>(entityType: string): EntityData<T> {
  switch (entityType) {
    case "books":
      return useBooks() as EntityData<T>;
    case "authors":
      return useAuthors() as EntityData<T>;
    case "users":
      return useUsers() as EntityData<T>;
    case "genres":
      return useGenres() as EntityData<T>;
    case "tags":
      return useTags() as EntityData<T>;
    case "keywords":
      return useKeywords() as EntityData<T>;
    case "series":
      return useSeries() as EntityData<T>;
    case "comments":
      return useComments() as EntityData<T>;
    case "subgenres":
      return useSubgenres() as EntityData<T>;
    default:
      throw new Error("Unsupported entity type");
  }
}
