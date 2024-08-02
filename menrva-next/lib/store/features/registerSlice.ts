import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface RegisterState {
  profile: {
    email: string;
    firstName: string;
    lastName: string;
    tag: string;
    password: string;
  };
  selections: {
    genres: string[];
    subgenres: string[];
    keywords: string[];
    tags: string[];
  };
}

const initialState: RegisterState = {
  profile: {
    email: '',
    firstName: '',
    lastName: '',
    tag: '',
    password: '',
  },
  selections: {
    genres: [],
    subgenres: [],
    keywords: [],
    tags: [],
  },
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<RegisterState['profile']>) => {
      state.profile = action.payload;
    },
    setSelections: (state, action: PayloadAction<RegisterState['selections']>) => {
      state.selections = action.payload;
    },
  },
});

export const selectRegister = (state: RootState) => state.register;

export default registerSlice.reducer;