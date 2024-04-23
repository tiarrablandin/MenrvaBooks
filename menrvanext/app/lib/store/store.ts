import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './bookSlice';
import userReducer from './userSlice';
import themeReducer from './themeSlice';
import searchReducer from './searchSlice';
import authorReducer from './authorSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    author: authorReducer,
    book: bookReducer,
    search: searchReducer,
    theme: themeReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
