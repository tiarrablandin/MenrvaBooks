import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BookResponse } from "../models/book";
import { useAuth } from "../hooks/useAuth";

export interface BookState {
    allBooks: BookResponse[],
    newReleases: BookResponse[],
    error: string | null;
    loading: boolean;
}

const initialState: BookState = {
    allBooks: [],
    newReleases: [],
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
            console.log('in toggleBookLiked ' + token)
            const response = await fetch(`http://localhost:8085/api/books/${bookId}/react?status=${status}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log('in toggleBookLiked 3')
            if (!response.ok) {
                throw new Error("Failed to toggle liked status");
            }
            const resp = await response.json();
            console.log(resp)
            return resp;
        } catch (error: any) {
            return rejectWithValue(error.message);
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
            });
    }
});

export const { updateAllBooks, updateNewReleases, updateBook } = bookSlice.actions;

export default bookSlice.reducer;