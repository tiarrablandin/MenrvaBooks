import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface KeywordState {
    allKeywords: Keyword[],
    error: string | null;
    loading: boolean;
}

const initialState: KeywordState = {
    allKeywords: [],
    error: null,
    loading: false,
}

export const toggleKeywordReviewed = createAsyncThunk(
    'keywords/toggleReviewed',
    async ({ keywordId }: { keywordId: number }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/keywords/${keywordId}/toggle-reviewed`, {
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

export const fetchKeywordsThunk = createAsyncThunk(
    'keywords/fetchKeywords',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:8085/api/keywords');
            if (!response.ok) {
                throw new Error("Failed to fetch authors.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

export const keywordSlice = createSlice({
    name: "keyword",
    initialState: initialState,
    reducers: {
        updateAllKeywords: (state, action: PayloadAction<{ keyword: Keyword[] }>) => {
            state.allKeywords = action.payload.keyword;
        },
        updateKeyword: (state, action: PayloadAction<Keyword>) => {
            const index = state.allKeywords.findIndex(keyword => keyword.id === action.payload.id);
            if (index !== -1) {
                state.allKeywords[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchKeywordsThunk.fulfilled, (state, action) => {
                state.allKeywords = action.payload;
            })
            .addCase(toggleKeywordReviewed.fulfilled, (state, action) => {
                const index = state.allKeywords.findIndex(keyword => keyword.id === action.payload.id);
                if (index !== -1) {
                    state.allKeywords[index] = action.payload;
                }
            });
    }
});

export const { updateAllKeywords, updateKeyword } = keywordSlice.actions;

export default keywordSlice.reducer;