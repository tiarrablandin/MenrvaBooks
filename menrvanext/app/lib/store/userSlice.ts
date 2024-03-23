import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { User } from '../models/user';
import { authenticate } from '@/app/services/apiService';

interface UserState {
    user: User | null;
    error: string | null;
    jwt: string | null;
}

const initialState: UserState = {
    user: null,
    error: null,
    jwt: null,
};

// Define an async thunk for the login process
export const login = createAsyncThunk(
    'user/login',
    async ({ username, password }: { username: string, password: string }, { rejectWithValue }) => {
        try {
            const { jwt, user } = await authenticate(username, password);
            // Assuming your AuthService returns the JWT directly; adjust as needed
            return { jwt, user };
        } catch (error) {
            // Handle any errors here
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
        },
        // Add any other user-related reducers here
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action: PayloadAction<{ jwt: string, user: User }>) => {
                state.jwt = action.payload.jwt;
                state.user = action.payload.user;
                // You might want to also fetch the user info here and set state.user
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload as string; // Assuming the payload is the error message
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.jwt = null;
                state.error = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.error = action.payload as string;
            });
    },
});

// Export the reducer and any actions you want to make available
export const { logoutSuccess } = userSlice.actions;

export default userSlice.reducer;

// Selectors if needed
export const selectCurrentUser = (state: RootState) => state.user.user;
export const selectJwt = (state: RootState) => state.user.jwt;

