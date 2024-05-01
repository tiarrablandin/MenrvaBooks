import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './bookSlice';
import userReducer from './userSlice';
import themeReducer from './themeSlice';
import searchReducer from './searchSlice';
import authorReducer from './authorSlice';
import genreReducer from './genreSlice';
import subgenreReducer from './subgenreSlice';
import commentReducer from './commentSlice';
import seriesReducer from './seriesSlice';
import keywordReducer from './keywordSlice';
import tagReducer from './tagSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

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
