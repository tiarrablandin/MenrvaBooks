import { useSelector } from "react-redux";
import { fetchBooksThunk, toggleBookLiked, toggleBookReviewed } from "../store/bookSlice";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback } from "react";

export function useBooks() {
    const dispatch = useAppDispatch();
    const books = useSelector((state: RootState) => state.book.allBooks);
    const loading = useSelector((state: RootState) => state.book.loading);
    const error = useSelector((state: RootState) => state.book.error);
    const token = useSelector((state: RootState) => state.user.jwt);

    const fetchBooks = useCallback(() => {
        dispatch(fetchBooksThunk());
    }, [dispatch]);

    const toggleReviewed = (bookId: number) => {
        dispatch(toggleBookReviewed({ bookId }));
    };

    const toggleLiked = (bookId: number, status: number) => {
        dispatch(toggleBookLiked({ bookId, status, token }));
    };

    return {
        data: books,
        loading,
        error,
        fetchData: fetchBooks,
        toggleReviewed,
        toggleLiked
    };
}