import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setReduxTheme: (state, action) => {
      state.theme = action.payload;
    }
  },
});

export const { toggleTheme, setReduxTheme } = themeSlice.actions;

export default themeSlice.reducer;
