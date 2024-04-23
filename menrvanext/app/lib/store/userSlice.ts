import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { User } from '../models/user';
import { authenticate } from '@/app/lib/services/apiService';

interface UserState {
    user: User | null;
    jwt: string | null;
    error: string | null;
    loading: boolean;
}

const initialState: UserState = {
    user: null,
    jwt: null,
    error: null,
    loading: false,
};

// Define an async thunk for the login process
export const login = createAsyncThunk(
    'user/login',
    async ({ username, password }: { username: string, password: string }, { rejectWithValue }) => {
        try {
            const { jwt, user } = await authenticate(username, password);
            return { jwt, user };
        } catch (error) {
            return rejectWithValue('Failed to login');
        }
    }
);

export const logout = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
        try {
            // await authService.logout();
            return;
        } catch (error) {
            return rejectWithValue("Failed to logout");
        }
    });

// Create a user slice with reducers and extraReducers for handling async thunks
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutSuccess: (state) => {
            state.user = null;
            state.jwt = null;
            state.loading = false;
        },
        // Add any other user-related reducers here
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<{ jwt: string, user: User }>) => {
                state.loading = false;
                state.jwt = action.payload.jwt;
                state.user = action.payload.user;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string; // Assuming the payload is the error message
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
                state.jwt = null;
                state.error = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.error = action.payload as string;
            });
    },
});

export const { logoutSuccess } = userSlice.actions;
export default userSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.user.user;
export const selectJwt = (state: RootState) => state.user.jwt;
export const selectUserError = (state: RootState) => state.user.error;
export const selectUserLoading = (state: RootState) => state.user.loading;