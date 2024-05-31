import { BookResponse } from '@/lib/models/book';
import { fetchSearchResults } from '@/lib/services/apiService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
        clearSuggestionsAndTerm(state) {
            state.searchTerm = "";
            state.suggestions = [];
        },
        clearSuggestions(state) {
            state.suggestions = [];
        },
        clearSearchTerm(state) {
            state.searchTerm = "";
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

export const { setSearchTerm, clearSuggestions, clearSuggestionsAndTerm, clearSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
