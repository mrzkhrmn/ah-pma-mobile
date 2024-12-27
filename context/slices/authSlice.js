const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  authUser: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.authUser = action.payload;
      state.error = null;
    },

    signInFailure: (state, action) => {
      state.loading = false;
      state.authUser = null;
      state.error = action.payload;
    },
    logoutStart: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.authUser = null;
      state.error = null;
    },

    logoutFailure: (state, action) => {
      state.loading = false;
      state.authUser = null;
      state.error = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} = authSlice.actions;

export default authSlice.reducer;
