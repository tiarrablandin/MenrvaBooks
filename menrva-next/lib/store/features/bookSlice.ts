import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { BookResponse } from "@/lib/models/book";
import { fetchBookById } from "@/lib/services/apiService";
import { BookInteraction } from "@/lib/models/bookInteraction";

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
    async ({ bookId, token }: { bookId: number, token: string | undefined }, { getState, rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/books/${bookId}/hasRead`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error("Failed to toggle has read status");
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleBookInterested = createAsyncThunk(
    'books/toggleInterested',
    async ({ bookId, token }: { bookId: number, token: string | undefined }, { getState, rejectWithValue }) => {
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
                throw new Error("Failed to toggle favorite status");
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
            const data = await fetchBookById(bookId);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleBookLiked = createAsyncThunk(
    'books/toggleLiked',
    async ({ bookId, status, token }: { bookId: number, status: number, token: string | undefined }, { rejectWithValue, getState }) => {
        console.log(token);
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
            return { bookId, liked: data.likeDislike === 1, disliked: data.likeDislike === -1 };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchInteractions = createAsyncThunk(
    'books/fetchBookInteractions',
    async ({ bookId }: { bookId: number }, { rejectWithValue, getState }) => {
        const token = (getState() as RootState).user.jwt;
        try {
            const response = await fetch(`http://localhost:8085/api/books/${bookId}/interaction`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
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
        updateHasRead: (state, action: PayloadAction<boolean>) => {
            state.interactions.hasRead = action.payload;
        },
        updateInterested: (state, action: PayloadAction<boolean>) => {
            state.interactions.interested = action.payload;
        },
        updateLikeDislike: (state, action: PayloadAction<{ status: number }>) => {
            if (action.payload.status === 1) {
                state.interactions.liked = true;
                state.interactions.disliked = false;
            } else if (action.payload.status === -1) {
                state.interactions.disliked = true;
                state.interactions.liked = false;
            } else {
                state.interactions.liked = false;
                state.interactions.disliked = false;
            }
        },
        updateInteractions: (state, action: PayloadAction<BookInteraction>) => {
            state.interactions.hasRead = action.payload.hasRead;
            state.interactions.interested = action.payload.interested;
            state.interactions.liked = Number(action.payload.likeDislike) === 1;
            state.interactions.disliked = action.payload.likeDislike === -1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookDetailsThunk.fulfilled, (state, action) => {
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
                state.interactions = action.payload;
            })
            .addCase(toggleBookInterested.fulfilled, (state, action) => {
                state.interactions = action.payload;
                state.currentBook!!.bookInteractions = action.payload;
            })
            .addCase(toggleBookHasRead.fulfilled, (state, action) => {
                state.interactions = action.payload;
                state.currentBook!!.bookInteractions = action.payload;
            })
            .addCase(toggleBookLiked.fulfilled, (state, action) => {
                state.interactions.liked = action.payload.liked;
                state.interactions.disliked = action.payload.disliked;
            })
    }
});

export const { updateAllBooks, updateNewReleases, updateBook, updateLikeDislike, updateHasRead, updateInteractions, updateInterested } = bookSlice.actions;

export default bookSlice.reducer;