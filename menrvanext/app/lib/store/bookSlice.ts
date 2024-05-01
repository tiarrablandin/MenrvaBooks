import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BookResponse } from "../models/book";
import { RootState } from "./store";

export interface BookState {
    allBooks: BookResponse[];
    newReleases: BookResponse[];
    likedBooks: number[];
    currentBook: BookResponse | null;
    interactions: {
        liked: boolean,
        disliked: boolean,
        favorite: boolean,
        hasRead: boolean,
        interested: boolean
    };
    error: string | null;
    loading: boolean;
}

const initialState: BookState = {
    allBooks: [],
    newReleases: [],
    likedBooks: [],
    currentBook: null,
    interactions: {
        liked: false,
        disliked: false,
        favorite: false,
        hasRead: false,
        interested: false
    },
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

export const toggleBookHasRead = createAsyncThunk(
    'books/toggleHasRead',
    async ({ bookId }: { bookId: number }, { getState, rejectWithValue }) => {
        const token = (getState() as RootState).user.jwt;
        try {
            const response = await fetch(`http://localhost:8085/api/books/${bookId}/hasRead`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error("Failed to toggle interested status");
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleBookInterested = createAsyncThunk(
    'books/toggleInterested',
    async ({ bookId }: { bookId: number }, { getState, rejectWithValue }) => {
        const token = (getState() as RootState).user.jwt;
        try {
            const response = await fetch(`http://localhost:8085/api/books/${bookId}/interested`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error("Failed to toggle interested status");
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleBookFavorite = createAsyncThunk(
    'books/toggleFavorite',
    async ({ bookId }: { bookId: number }, { getState, rejectWithValue }) => {
        const token = (getState() as RootState).user.jwt;
        try {
            const response = await fetch(`http://localhost:8085/api/books/${bookId}/favorite`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
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

export const fetchBookDetailsThunk = createAsyncThunk(
    'books/fetchBook',
    async ({ bookId }: { bookId: number }, { getState, rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/books/${bookId}`);
            if (!response.ok) {
                throw new Error("Failed to toggle liked status");
            }
            const data = await response.json();
            return data;
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
            return { bookId, liked: data.likeDislike === 1, disliked: data.likeDislike === -1 };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchInteractions = createAsyncThunk(
    'books/fetchBookInteractions',
    async ({ bookId, token }: { bookId: number, token: string | null }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/books/${bookId}/interaction`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            console.log(data);
            return { interested: data.interested, liked: data.likeDislike === 1, disliked: data.likeDislike === -1, favorite: data.favorite, hasRead: data.hasRead };
        } catch (error: any) {
            return rejectWithValue('Failed to fetch liked status: ' + error.message);
        }
    }
);

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
);


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
            .addCase(fetchBookDetailsThunk.fulfilled, (state, action) => {
                console.log(action.payload);
                state.currentBook = action.payload;
            })
            .addCase(fetchBooksThunk.fulfilled, (state, action) => {
                state.allBooks = action.payload;
            })
            .addCase(toggleBookReviewed.fulfilled, (state, action) => {
                const index = state.allBooks.findIndex(book => book.id === action.payload.id);
                if (index !== -1) {
                    state.allBooks[index] = action.payload;
                }
            })
            .addCase(fetchInteractions.fulfilled, (state, action) => {
                state.interactions = action.payload;
            })
            .addCase(toggleBookFavorite.fulfilled, (state, action) => {
                state.interactions = action.payload
            })
            .addCase(toggleBookInterested.fulfilled, (state, action) => {
                state.interactions = action.payload
            })
            .addCase(toggleBookHasRead.fulfilled, (state, action) => {
                state.interactions = action.payload
            })
            .addCase(toggleBookLiked.fulfilled, (state, action) => {
                const { bookId, liked, disliked } = action.payload;
                if (liked === true) state.likedBooks[bookId] = 1;
                else if (disliked === true) state.likedBooks[bookId] = -1;
            })
    }
});

export const { updateAllBooks, updateNewReleases, updateBook } = bookSlice.actions;

export default bookSlice.reducer;