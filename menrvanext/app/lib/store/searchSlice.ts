import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSearchResults } from '../services/apiService';
import { BookResponse } from '../models/book';

export interface SearchState {
    searchTerm: string;
    suggestions: BookResponse[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: SearchState = {
    searchTerm: '',
    suggestions: [],
    status: 'idle',
    error: null
};


export const fetchSuggestions = createAsyncThunk<BookResponse[], string>(
    'search/fetchSuggestions',
    async (searchTerm: string) => {
        const response = await fetchSearchResults(searchTerm);
        if (response && response.length > 5) return response.slice(0, 5);
        else return []
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        clearSuggestions(state) {
            state.searchTerm = "";
            state.suggestions = [];
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchSuggestions.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchSuggestions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.suggestions = action.payload;
            })
            .addCase(fetchSuggestions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message!!;
            });
    }
});

export const { setSearchTerm, clearSuggestions } = searchSlice.actions;

export default searchSlice.reducer;
