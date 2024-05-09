'use client';

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authorReducer from './authorSlice';
import bookReducer from './bookSlice';
import commentReducer from './commentSlice';
import genreReducer from './genreSlice';
import keywordReducer from './keywordSlice';
import searchReducer from './searchSlice';
import seriesReducer from './seriesSlice';
import subgenreReducer from './subgenreSlice';
import tagReducer from './tagSlice';
import themeReducer from './themeSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    author: authorReducer,
    book: bookReducer,
    comment: commentReducer,
    genre: genreReducer,
    keyword: keywordReducer,
    search: searchReducer,
    series: seriesReducer,
    subgenre: subgenreReducer,
    tag: tagReducer,
    theme: themeReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;