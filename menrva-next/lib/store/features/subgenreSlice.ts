import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Subgenre } from "../../models/subgenre";

export interface SubgenreState {
    allSubgenres: Subgenre[],
    error: string | null;
    loading: boolean;
    editing: boolean;
}

const initialState: SubgenreState = {
    allSubgenres: [],
    error: null,
    loading: false,
    editing: false,
}

export const toggleSubgenreReviewed = createAsyncThunk(
    'subgenres/toggleReviewed',
    async ({ subgenreId }: { subgenreId: number }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/subgenres/${subgenreId}/toggle-reviewed`, {
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

export const fetchSubgenresThunk = createAsyncThunk(
    'subgenres/fetchSubgenres',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:8085/api/subgenres');
            if (!response.ok) {
                throw new Error("Failed to fetch authors.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateSubgenreThunk = createAsyncThunk(
    'subgenres/updateSubgenre',
    async ({ id, subgenreName }: { id: number, subgenreName: string }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/subgenres/${id}`, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: subgenreName,
            });
            if (!response.ok) {
                throw new Error("Failed to update Subgenre.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

export const subgenreSlice = createSlice({
    name: "subgenre",
    initialState: initialState,
    reducers: {
        updateAllSubgenres: (state, action: PayloadAction<{ subgenres: Subgenre[] }>) => {
            state.allSubgenres = action.payload.subgenres;
        },
        updateSubgenre: (state, action: PayloadAction<Subgenre>) => {
            const index = state.allSubgenres.findIndex(subgenre => subgenre.id === action.payload.id);
            if (index !== -1) {
                state.allSubgenres[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubgenresThunk.fulfilled, (state, action) => {
                state.allSubgenres = action.payload;
            })
            .addCase(updateSubgenreThunk.fulfilled, (state, action) => {
                const index = state.allSubgenres.findIndex(subgenre => subgenre.id === action.payload.id);
                if (index !== -1) {
                    state.allSubgenres[index] = action.payload;
                }
            })
            .addCase(toggleSubgenreReviewed.fulfilled, (state, action) => {
                const index = state.allSubgenres.findIndex(subgenre => subgenre.id === action.payload.id);
                if (index !== -1) {
                    state.allSubgenres[index] = action.payload;
                }
            });
    }
});

export const { updateAllSubgenres, updateSubgenre } = subgenreSlice.actions;

export default subgenreSlice.reducer;