import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { BookResponse } from "../models/book";

export interface BookState {
    allBooks: BookResponse[],
    newReleases: BookResponse[],
}

const initialState: BookState = {
    allBooks: [],
    newReleases: []
}

export const bookSlice = createSlice({
    name: "book",
    initialState: initialState,
    reducers: {
        updateAllBooks: (state, action: PayloadAction<{ books: BookResponse[] }>) => {
            state.allBooks = action.payload.books;
        },
        updateNewReleases: (state, action: PayloadAction<{ books: BookResponse[] }>) => {
            state.newReleases = action.payload.books;
        },
    }
});

export const { updateAllBooks, updateNewReleases } = bookSlice.actions;

export default bookSlice.reducer;