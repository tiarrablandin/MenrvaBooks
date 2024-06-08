import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Author } from "../../models/author";
import { RootState } from "../store";

export interface AuthorState {
    allAuthors: Author[],
    isFollowing: boolean;
    error: string | null;
    loading: boolean;
}

const initialState: AuthorState = {
    allAuthors: [],
    isFollowing: false,
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
);

export const toggleFollowAuthor = createAsyncThunk(
    'authors/toggleFollow',
    async ({ authorId, token }: { authorId: number, token: string }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/authors/${authorId}/toggleFollow`, {
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
        updateIsFollowing: (state, action: PayloadAction<boolean>) => {
            state.isFollowing = action.payload;
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
            })
            .addCase(toggleFollowAuthor.fulfilled, (state, action) => {
                state.isFollowing = !state.isFollowing;
            })
    }
});

export const { updateAllAuthors, updateAuthor, updateIsFollowing } = authorSlice.actions;

export default authorSlice.reducer;