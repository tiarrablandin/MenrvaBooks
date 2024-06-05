import { configureStore } from "@reduxjs/toolkit/react"
import { useDispatch, useSelector, useStore } from "react-redux"
import authorReducer from './features/authorSlice';
import bookReducer from './features/bookSlice';
import commentReducer from './features/commentSlice';
import genreReducer from './features/genreSlice';
import keywordReducer from './features/keywordSlice';
import searchReducer from './features/searchSlice';
import seriesReducer from './features/seriesSlice';
import subgenreReducer from './features/subgenreSlice';
import tagReducer from './features/tagSlice';
import themeReducer from './features/themeSlice';
import userReducer from './features/userSlice';

export const makeStore = () => {
  return configureStore({
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
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()