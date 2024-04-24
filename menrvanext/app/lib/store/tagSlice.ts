import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface TagState {
    allTags: Tag[],
    error: string | null;
    loading: boolean;
}

const initialState: TagState = {
    allTags: [],
    error: null,
    loading: false,
}

export const toggleTagReviewed = createAsyncThunk(
    'tags/toggleReviewed',
    async ({ tagId }: { tagId: number }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/tags/${tagId}/toggle-reviewed`, {
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

export const fetchTagsThunk = createAsyncThunk(
    'tags/fetchTags',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:8085/api/tags');
            if (!response.ok) {
                throw new Error("Failed to fetch authors.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

export const tagSlice = createSlice({
    name: "tag",
    initialState: initialState,
    reducers: {
        updateAllTags: (state, action: PayloadAction<{ tags: Tag[] }>) => {
            state.allTags = action.payload.tags;
        },
        updateTag: (state, action: PayloadAction<Tag>) => {
            const index = state.allTags.findIndex(tag => tag.id === action.payload.id);
            if (index !== -1) {
                state.allTags[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTagsThunk.fulfilled, (state, action) => {
                state.allTags = action.payload;
            })
            .addCase(toggleTagReviewed.fulfilled, (state, action) => {
                const index = state.allTags.findIndex(tag => tag.id === action.payload.id);
                if (index !== -1) {
                    state.allTags[index] = action.payload;
                }
            });
    }
});

export const { updateAllTags, updateTag } = tagSlice.actions;

export default tagSlice.reducer;