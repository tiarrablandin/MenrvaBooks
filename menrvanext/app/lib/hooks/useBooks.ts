import { useCallback } from "react";
import { useSelector } from "react-redux";
import { fetchBookDetailsThunk, fetchBooksThunk, fetchInteractions, toggleBookFavorite, toggleBookHasRead, toggleBookInterested, toggleBookLiked, toggleBookReviewed } from "../store/bookSlice";
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




    const toggleInterested = useCallback((bookId: number) => {
        dispatch(toggleBookInterested({ bookId }));
    }, [dispatch]);

    const toggleFavorite = useCallback((bookId: number) => {
        dispatch(toggleBookFavorite({ bookId }));
    }, [dispatch]);

    const toggleHasRead = useCallback((bookId: number) => {
        dispatch(toggleBookHasRead({ bookId }));
    }, [dispatch]);



    const toggleLiked = useCallback((bookId: number, status: number) => {
        dispatch(toggleBookLiked({ bookId, status, token }));
    }, [dispatch]);

    const fetchBookInteractions = useCallback((bookId: number) => {
        dispatch(fetchInteractions({ bookId, token }))
    }, [dispatch]);

    return {
        data: books,
        loading,
        error,
        fetchData: fetchBooks,
        toggleReviewed,
        toggleLiked,
        fetchBookInteractions,
        likedBooks,
        fetchBookDetails,
        currentBook,
        toggleInterested,
        toggleFavorite,
        toggleHasRead,
    };
}