import { PayloadAction, createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { Comment } from "../models/comment";

export interface CommentState {
    allComments: Comment[],
    error: string | null;
    loading: boolean;
}

const initialState: CommentState = {
    allComments: [],
    error: null,
    loading: false,
}
export const toggleCommentReviewed = createAsyncThunk(
    'comments/toggleReviewed',
    async ({ commentId }: { commentId: number }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/comments/${commentId}/toggle-reviewed`, {
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

export const fetchCommentsThunk = createAsyncThunk(
    'comments/fetchComments',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:8085/api/comments');
            if (!response.ok) {
                throw new Error("Failed to fetch authors.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchCommentsForBook = createAsyncThunk(
    'comments/fetchCommentsForBook',
    async ({ bookId }: { bookId: number}, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/comments/book/${bookId}`);
            if (!response.ok) {
                throw new Error("Failed to fetch authors.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteCommentThunk = createAsyncThunk(
    'comments/deleteComment',
    async ({ commentId }: { commentId: number }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8085/api/comments/${commentId}`, {
                method: "DELETE"
            })
            if (!response.ok) {
                throw new Error("Failed to fetch authors.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const createCommentThunk = createAsyncThunk(
    'comments/createComment',
    async ({ comment, bookId }: { comment: string, bookId: number }, { rejectWithValue }) => {
        const token = sessionStorage.getItem('token')
        try {
            const response = await fetch(`http://localhost:8085/api/comments`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ comment, bookId })
            })
            if (!response.ok) {
                throw new Error("Failed to fetch authors.")
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }

    }
)

export const commentSlice = createSlice({
    name: "comment",
    initialState: initialState,
    reducers: {
        updateAllComments: (state, action: PayloadAction<{ comments: Comment[] }>) => {
            state.allComments = action.payload.comments;
        },
        updateComment: (state, action: PayloadAction<Comment>) => {
            const index = state.allComments.findIndex(comment => comment.id === action.payload.id);
            if (index !== -1) {
                state.allComments[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsThunk.fulfilled, (state, action) => {
                state.allComments = action.payload;
            })
            .addCase(toggleCommentReviewed.fulfilled, (state, action) => {
                const index = state.allComments.findIndex(comment => comment.id === action.payload.id);
                if (index !== -1) {
                    state.allComments[index] = action.payload;
                }
            });
    }
});

export const { updateAllComments, updateComment } = commentSlice.actions;

export default commentSlice.reducer;