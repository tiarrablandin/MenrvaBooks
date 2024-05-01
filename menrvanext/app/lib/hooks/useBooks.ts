import { useCallback } from "react";
import { useSelector } from "react-redux";
import { fetchBooksThunk, fetchLikedStatus, toggleBookLiked, toggleBookReviewed } from "../store/bookSlice";
import { RootState, useAppDispatch } from "../store/store";
import { selectJwt } from "../store/userSlice";

export function useBooks() {
    const dispatch = useAppDispatch();
    const books = useSelector((state: RootState) => state.book.allBooks);
    const likedBooks = useSelector((state: RootState) => state.book.likedBooks);
    const loading = useSelector((state: RootState) => state.book.loading);
    const error = useSelector((state: RootState) => state.book.error);
    // const altToken = useSelector(selectJwt);
    const token = useSelector((state: RootState) => state.user.jwt);

    const fetchBooks = useCallback(() => {
        dispatch(fetchBooksThunk());
    }, [dispatch]);

    const toggleReviewed = useCallback((bookId: number) => {
        dispatch(toggleBookReviewed({ bookId }));
    }, [dispatch]);

    const toggleLiked = useCallback((bookId: number, status: number) => {
        console.log(token);
        dispatch(toggleBookLiked({ bookId, status, token }));
    }, [dispatch]);

    const bookLikedStatus = useCallback((bookId: number) => {
        console.log(token);
        dispatch(fetchLikedStatus({ bookId, token }))
    }, [dispatch]);

    return {
        data: books,
        loading,
        error,
        fetchData: fetchBooks,
        toggleReviewed,
        toggleLiked,
        fetchLikedStatus: bookLikedStatus,
        likedBooks,
    };
}