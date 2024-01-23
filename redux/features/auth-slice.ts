import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  user: any;
  token: string | null;
  isLoggedIn: boolean;
  userRole: string | null;
  expiresAt?: Date | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  userRole: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogin: (state, action) => {
      // store the user and token in the the local storage
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem(
        "expiresAt",
        JSON.stringify(action.payload.expiresAt)
      );
      // update the state
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.userRole = action.payload.user.role;
      state.expiresAt = action.payload.expiresAt;
    },
    onLogout: (state) => {
      // remove the user and token from the local storage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("expiresAt");
      // update the state
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.userRole = null;
      state.expiresAt = null;
    },
    onUpdateUser: (state, action) => {
      // update the user in the local storage
      localStorage.setItem("user", JSON.stringify(action.payload));
      // update the state
      state.user = action.payload;
      state.userRole = action.payload.role;
    },
  },
});

export const { onLogin, onLogout, onUpdateUser } = authSlice.actions;
export default authSlice.reducer;
