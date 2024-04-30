import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Series } from "../models/ series";

export interface SeriesState {
    allSeries: Series[],
    error: string | null;
    loading: boolean;
}

const initialState: SeriesState = {
    allSeries: [],
    error: null,
    loading: false,
}

export const toggleSeriesReviewed = createAsyncThunk(
    'series/toggleReviewed',
    async ({ seriesId }: { seriesId: number }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/series/${seriesId}/toggle-reviewed`, {
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

export const fetchSeriesThunk = createAsyncThunk(
    'series/fetchSeries',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:8085/api/series');
            if (!response.ok) {
                throw new Error("Failed to fetch authors.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

export const seriesSlice = createSlice({
    name: "series",
    initialState: initialState,
    reducers: {
        updateAllSeries: (state, action: PayloadAction<{ series: Series[] }>) => {
            state.allSeries = action.payload.series;
        },
        updateSeries: (state, action: PayloadAction<Series>) => {
            const index = state.allSeries.findIndex(series => series.id === action.payload.id);
            if (index !== -1) {
                state.allSeries[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSeriesThunk.fulfilled, (state, action) => {
                state.allSeries = action.payload;
            })
            .addCase(toggleSeriesReviewed.fulfilled, (state, action) => {
                const index = state.allSeries.findIndex(series => series.id === action.payload.id);
                if (index !== -1) {
                    state.allSeries[index] = action.payload;
                }
            });
    }
});

export const { updateAllSeries, updateSeries } = seriesSlice.actions;

export default seriesSlice.reducer;