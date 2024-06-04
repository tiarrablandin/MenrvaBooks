import { useCallback } from "react";
import { useSelector } from "react-redux";
import { fetchBookDetailsThunk, fetchBooksThunk, toggleBookReviewed } from "../store/features/bookSlice";
import { RootState, useAppDispatch } from "../store/store";

export function useBooks() {
    const dispatch = useAppDispatch();
    const books = useSelector((state: RootState) => state.book.allBooks);
    const currentBook = useSelector((state: RootState) => state.book.currentBook);
    const likedBooks = useSelector((state: RootState) => state.book.likedBooks);
    const loading = useSelector((state: RootState) => state.book.loading);
    const error = useSelector((state: RootState) => state.book.error);
    const token = useSelector((state: RootState) => state.user.jwt);

    const fetchBooks = useCallback(() => {
        dispatch(fetchBooksThunk());
    }, [dispatch]);

    const fetchBookDetails = useCallback((bookId: number) => {
        dispatch(fetchBookDetailsThunk({ bookId }));
    }, [dispatch])

    const toggleReviewed = useCallback((bookId: number) => {
        dispatch(toggleBookReviewed({ bookId }));
    }, [dispatch]);




    return {
        data: books,
        loading,
        error,
        fetchData: fetchBooks,
        toggleReviewed,
        likedBooks,
        fetchBookDetails,
        currentBook,
    };
}