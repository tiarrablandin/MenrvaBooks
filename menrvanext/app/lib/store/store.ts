import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './bookSlice';
import userReducer from './userSlice';
import themeReducer from './themeSlice';
import searchReducer from './searchSlice';
import authorReducer from './authorSlice';
import genreReducer from './genreSlice';
import commentReducer from './commentSlice';
import seriesReducer from './seriesSlice';
import keywordReducer from './keywordSlice';
import tagReducer from './tagSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    author: authorReducer,
    book: bookReducer,
    search: searchReducer,
    theme: themeReducer,
    user: userReducer,
    genre: genreReducer,
    comment: commentReducer,
    series: seriesReducer,
    keyword: keywordReducer,
    tag: tagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
