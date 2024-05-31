import { configureStore } from "@reduxjs/toolkit/react"
import { useDispatch, useSelector, useStore } from "react-redux"
import themeReducer from "./features/theme/themeSlice"
import searchReducer from "./features/theme/searchSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      search: searchReducer,
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