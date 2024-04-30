import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { User } from '../models/user';
import { authenticate } from '@/app/lib/services/apiService';

interface UserState {
    user: User | null;
    allUsers: User[];
    jwt: string | null;
    error: string | null;
    loading: boolean;
}

const initialState: UserState = {
    user: null,
    allUsers: [],
    jwt: null,
    error: null,
    loading: false,
};

// Define an async thunk for the login process
export const login = createAsyncThunk(
    'user/login',
    async ({ identifier, password }: { identifier: string, password: string }, { rejectWithValue }) => {
        try {
            const { jwt, user } = await authenticate(identifier, password);
            sessionStorage.setItem('token', jwt);
            sessionStorage.setItem('userDetails', JSON.stringify(user));
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
    }
);

export const toggleUserActive = createAsyncThunk(
    'user/toggleActive',
    async ({ userId, token }: { userId: number, token: string | null }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/users/${userId}/active`, {
                method: "POST",
                // headers: {
                //     "Authorization": `Bearer ${token}`
                // }
            });
            if (!response.ok) {
                throw new Error("Failed to toggle liked status");
            }
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchUsersThunk = createAsyncThunk(
    'user/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:8085/api/users');
            if (!response.ok) {
                throw new Error("Failed to fetch users.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

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
        setToken: (state, action: PayloadAction<string>) => {
            state.jwt = action.payload;
        },
        setUserDetails: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        // Add any other user-related reducers here
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersThunk.fulfilled, (state, action) => {
                state.allUsers = action.payload;
            })
            .addCase(toggleUserActive.fulfilled, (state, action) => {
                const index = state.allUsers.findIndex(user => user.id === action.payload.id);
                if (index !== -1) {
                    state.allUsers[index] = action.payload;
                }
            })
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

export const { logoutSuccess, setToken, setUserDetails } = userSlice.actions;
export default userSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.user.user;
export const selectJwt = (state: RootState) => state.user.jwt;
export const selectUserError = (state: RootState) => state.user.error;
export const selectUserLoading = (state: RootState) => state.user.loading;