const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  authUser: null,
  savedOperations: [],
  agreements: [],
  loading: false,
  error: null,
  language: "",
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
    saveOperationStart: (state) => {
      state.loading = true;
    },
    saveOperationSuccess: (state, action) => {
      const existingOperation = state.savedOperations?.find(
        (opr) => opr.id === action.payload.id
      );
      if (existingOperation) {
        state.savedOperations = state.savedOperations?.filter(
          (opr) => opr.id !== existingOperation.id
        );
      } else {
        state.savedOperations = [...state.savedOperations, action.payload];
      }
      state.loading = false;
      state.error = null;
    },
    saveOperationFailure: (state, action) => {
      state.loading = false;
      state.savedOperations = null;
      state.error = action.payload;
    },
    addAgreementStart: (state) => {
      state.loading = true;
    },
    addAgreementSuccess: (state, action) => {
      const existingAgreement = state.existingAgreement?.find(
        (opr) => opr.id === action.payload.id
      );
      if (existingOperation) {
        state.existingAgreement = state.existingAgreement?.filter(
          (opr) => opr.id !== existingOperation.id
        );
      } else {
        state.existingAgreement = [...state.existingAgreement, action.payload];
      }
      state.loading = false;
      state.error = null;
    },
    addAgreementFailure: (state, action) => {
      state.loading = false;
      state.savedOperations = null;
      state.error = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
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
  saveOperationStart,
  saveOperationSuccess,
  saveOperationFailure,
  addAgreementStart,
  addAgreementSuccess,
  addAgreementFailure,
  setLanguage,
} = authSlice.actions;

export default authSlice.reducer;
