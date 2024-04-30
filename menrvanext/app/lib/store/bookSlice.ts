import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BookResponse } from "../models/book";

export interface BookState {
    allBooks: BookResponse[],
    newReleases: BookResponse[],
    likedBooks: number[],
    error: string | null;
    loading: boolean;
}

const initialState: BookState = {
    allBooks: [],
    newReleases: [],
    likedBooks: [],
    error: null,
    loading: false,
}


export const toggleBookReviewed = createAsyncThunk(
    'books/toggleReviewed',
    async ({ bookId }: { bookId: number }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/books/${bookId}/toggle-reviewed`, {
                method: "POST",
            });
            if (!response.ok) {
                throw new Error("Failed to toggle reviewed status");
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleBookLiked = createAsyncThunk(
    'books/toggleLiked',
    async ({ bookId, status, token }: { bookId: number, status: number, token: string | null }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/books/${bookId}/react?status=${status}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error("Failed to toggle liked status");
            }
            const data = await response.json();
            console.log(data);
            return { bookId, liked: status === 1};
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchLikedStatus = createAsyncThunk(
    'books/fetchLikedStatus',
    async ({ bookId, token }: { bookId: number, token: string | null }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/books/${bookId}/interaction`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            console.log(data);
            return { bookId, liked: data.likeDislike === 1 };
        } catch (error: any) {
            return rejectWithValue('Failed to fetch liked status: ' + error.message);
        }
    }
)

export const fetchBooksThunk = createAsyncThunk(
    'books/fetchBooks',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:8085/api/books');
            if (!response.ok) {
                throw new Error("Failed to fetch books.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)


export const bookSlice = createSlice({
    name: "book",
    initialState: initialState,
    reducers: {
        updateAllBooks: (state, action: PayloadAction<{ books: BookResponse[] }>) => {
            state.allBooks = action.payload.books;
        },
        updateNewReleases: (state, action: PayloadAction<{ books: BookResponse[] }>) => {
            state.newReleases = action.payload.books;
        },
        updateBook: (state, action: PayloadAction<BookResponse>) => {
            const index = state.allBooks.findIndex(book => book.id === action.payload.id);
            if (index !== -1) {
                state.allBooks[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooksThunk.fulfilled, (state, action) => {
                state.allBooks = action.payload;
            })
            .addCase(toggleBookReviewed.fulfilled, (state, action) => {
                const index = state.allBooks.findIndex(book => book.id === action.payload.id);
                if (index !== -1) {
                    state.allBooks[index] = action.payload;
                }
            })
            .addCase(fetchLikedStatus.fulfilled, (state, action) => {
                const { bookId, liked } = action.payload;
                console.log(action.payload);
                if (liked === true) state.likedBooks.concat(bookId);
            })
            .addCase(toggleBookLiked.fulfilled, (state, action) => {
                const { bookId, liked } = action.payload;
                if (liked === true) state.likedBooks.concat(bookId);
            })
    }
});

export const { updateAllBooks, updateNewReleases, updateBook } = bookSlice.actions;

export default bookSlice.reducer;