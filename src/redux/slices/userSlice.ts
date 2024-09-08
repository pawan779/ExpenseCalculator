import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UsersState {
  user: User;
  userLoading: boolean;
}

interface User {
  email: string;
  password: string;
}

const initialState: UsersState = {
  user: {
    email: "",
    password: "",
  },
  userLoading: false,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.userLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setUserLoading } = userSlice.actions;

export default userSlice.reducer;
