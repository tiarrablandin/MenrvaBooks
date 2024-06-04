import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Genre } from "../models/genre";

export interface GenreState {
    allGenres: Genre[],
    error: string | null;
    loading: boolean;
    editing: boolean;
}

const initialState: GenreState = {
    allGenres: [],
    error: null,
    loading: false,
    editing: false,
}

export const toggleGenreReviewed = createAsyncThunk(
    'genres/toggleReviewed',
    async ({ genreId }: { genreId: number }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/genres/${genreId}/toggle-reviewed`, {
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

export const fetchGenresThunk = createAsyncThunk(
    'genres/fetchGenres',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:8085/api/genres');
            if (!response.ok) {
                throw new Error("Failed to fetch authors.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateGenreThunk = createAsyncThunk(
    'genres/updateGenre',
    async ({ id, genreName }: { id: number, genreName: string }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/genres/${id}`, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: genreName,
            });
            if (!response.ok) {
                throw new Error("Failed to update genre.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

export const genreSlice = createSlice({
    name: "genre",
    initialState: initialState,
    reducers: {
        updateAllGenres: (state, action: PayloadAction<{ genres: Genre[] }>) => {
            state.allGenres = action.payload.genres;
        },
        updateGenre: (state, action: PayloadAction<Genre>) => {
            const index = state.allGenres.findIndex(genre => genre.id === action.payload.id);
            if (index !== -1) {
                state.allGenres[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGenresThunk.fulfilled, (state, action) => {
                state.allGenres = action.payload;
            })
            .addCase(updateGenreThunk.fulfilled, (state, action) => {
                const index = state.allGenres.findIndex(genre => genre.id === action.payload.id);
                if (index !== -1) {
                    state.allGenres[index] = action.payload;
                }
            })
            .addCase(toggleGenreReviewed.fulfilled, (state, action) => {
                const index = state.allGenres.findIndex(genre => genre.id === action.payload.id);
                if (index !== -1) {
                    state.allGenres[index] = action.payload;
                }
            });
    }
});

export const { updateAllGenres, updateGenre } = genreSlice.actions;

export default genreSlice.reducer;