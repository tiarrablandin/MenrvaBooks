import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Author } from "../models/author";

export interface AuthorState {
    allAuthors: Author[],
    error: string | null;
    loading: boolean;
}

const initialState: AuthorState = {
    allAuthors: [],
    error: null,
    loading: false,
}

export const toggleAuthorReviewed = createAsyncThunk(
    'authors/toggleReviewed',
    async ({ authorId }: { authorId: number }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/authors/${authorId}/toggle-reviewed`, {
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

export const fetchAuthorsThunk = createAsyncThunk(
    'authors/fetchAuthors',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:8085/api/authors');
            if (!response.ok) {
                throw new Error("Failed to fetch authors.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

export const authorSlice = createSlice({
    name: "author",
    initialState: initialState,
    reducers: {
        updateAllAuthors: (state, action: PayloadAction<{ authors: Author[] }>) => {
            state.allAuthors = action.payload.authors;
        },
        updateAuthor: (state, action: PayloadAction<Author>) => {
            const index = state.allAuthors.findIndex(author => author.id === action.payload.id);
            if (index !== -1) {
                state.allAuthors[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthorsThunk.fulfilled, (state, action) => {
                state.allAuthors = action.payload;
            })
            .addCase(toggleAuthorReviewed.fulfilled, (state, action) => {
                const index = state.allAuthors.findIndex(author => author.id === action.payload.id);
                if (index !== -1) {
                    state.allAuthors[index] = action.payload;
                }
            });
    }
});

export const { updateAllAuthors, updateAuthor } = authorSlice.actions;

export default authorSlice.reducer;