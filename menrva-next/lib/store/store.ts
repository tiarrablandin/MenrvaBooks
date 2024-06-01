import { configureStore } from "@reduxjs/toolkit/react"
import { useDispatch, useSelector, useStore } from "react-redux"
import themeReducer from "./features/themeSlice"
import searchReducer from "./features/searchSlice"
import userReducer from "./features/userSlice"
import bookReducer from "./features/bookSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      book: bookReducer,
      theme: themeReducer,
      search: searchReducer,
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