const { createSlice } = require("@reduxjs/toolkit");

interface initialStateProps {
  authUser: { username: string; password: string } | null;
  savedOperations:
    | { id: number; title: string; text: string }[]
    | null
    | undefined;
  agreements: { id: number; title: string; text: string }[] | null | undefined;
  notifications: { id: number; date: string; content: string }[];
  offers: { id: number; date: string; operation: string; status: string }[];
  loading: boolean;
  error: string | null;
}

const initialState: initialStateProps = {
  authUser: null,
  savedOperations: [],
  offers: [
    {
      id: 3633392,
      date: "15 Aralık 2024",
      operation:
        "Deviasyon (Septum Eğriliği) Ameliyatı, Revizyon Burun Cerrahisi.",
      status: "confirmed",
    },
    {
      id: 3633393,
      date: "19 Aralık 2024",
      operation: "Karın Gerdirme",
      status: "pending",
    },
    {
      id: 3633394,
      date: "21 Aralık 2024",
      operation: "Karın Gerdirme",
      status: "declined",
    },
    {
      id: 3633395,
      date: "25 Aralık 2024",
      operation: "Burun Açma",
      status: "confirmed",
    },
  ],
  agreements: [
    {
      id: 1,
      title: "Lorem",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      title: "Lorem",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
  notifications: [
    {
      id: 1,
      date: "15 Aralık 2024 - 15:22",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      date: "15 Aralık 2024 - 15:22",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationemnulla tempora asperiores voluptate fuga, iusto veniam dicta expeditapossimus voluptatibus fugit necessitatibus obcaecati quis officiis harumbeatae repellat debitis modi.",
    },
    {
      id: 3,
      date: "15 Aralık 2024 - 15:22",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationemnulla tempora asperiores voluptate fuga, iusto veniam dicta expeditapossimus voluptatibus fugit necessitatibus obcaecati quis officiis harumbeatae repellat debitis modi.",
    },
    {
      id: 4,
      date: "15 Aralık 2024 - 15:22",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationemnulla tempora asperiores voluptate fuga, iusto veniam dicta expeditapossimus voluptatibus fugit necessitatibus obcaecati quis officiis harumbeatae repellat debitis modi.",
    },
    {
      id: 5,
      date: "15 Aralık 2024 - 15:22",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationemnulla tempora asperiores voluptate fuga, iusto veniam dicta expeditapossimus voluptatibus fugit necessitatibus obcaecati quis officiis harumbeatae repellat debitis modi.",
    },
    {
      id: 6,
      date: "15 Aralık 2024 - 15:22",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationemnulla tempora asperiores voluptate fuga, iusto veniam dicta expeditapossimus voluptatibus fugit necessitatibus obcaecati quis officiis harumbeatae repellat debitis modi.",
    },
    {
      id: 7,
      date: "15 Aralık 2024 - 15:22",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationemnulla tempora asperiores voluptate fuga, iusto veniam dicta expeditapossimus voluptatibus fugit necessitatibus obcaecati quis officiis harumbeatae repellat debitis modi.",
    },
    {
      id: 8,
      date: "15 Aralık 2024 - 15:22",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationemnulla tempora asperiores voluptate fuga, iusto veniam dicta expeditapossimus voluptatibus fugit necessitatibus obcaecati quis officiis harumbeatae repellat debitis modi.",
    },
  ],
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStart: (state: initialStateProps) => {
      state.loading = true;
    },
    signInSuccess: (
      state: initialStateProps,
      action: { payload: initialStateProps["authUser"] }
    ) => {
      state.loading = false;
      state.authUser = action.payload;
      state.error = null;
    },

    signInFailure: (
      state: initialStateProps,
      action: { payload: initialStateProps["error"] }
    ) => {
      state.loading = false;
      state.authUser = null;
      state.error = action.payload;
    },
    logoutStart: (state: initialStateProps) => {
      state.loading = true;
    },
    logoutSuccess: (state: initialStateProps) => {
      state.loading = false;
      state.authUser = null;
      state.error = null;
    },

    logoutFailure: (
      state: initialStateProps,
      action: { payload: initialStateProps["error"] }
    ) => {
      state.loading = false;
      state.authUser = null;
      state.error = action.payload;
    },
    saveOperationStart: (state: initialStateProps) => {
      state.loading = true;
    },
    saveOperationSuccess: (
      state: initialStateProps,
      action: { payload: { id: number; title: string; text: string } }
    ) => {
      const existingOperation = state.savedOperations?.find(
        (opr) => opr.id === action.payload.id
      );
      if (existingOperation) {
        state.savedOperations = state.savedOperations?.filter(
          (opr) => opr.id !== existingOperation.id
        );
      } else {
        state.savedOperations = [
          ...(state.savedOperations || []),
          action.payload,
        ];
      }
      state.loading = false;
      state.error = null;
    },
    saveOperationFailure: (
      state: initialStateProps,
      action: { payload: initialStateProps["error"] }
    ) => {
      state.loading = false;
      state.savedOperations = null;
      state.error = action.payload;
    },
    addAgreementStart: (state: initialStateProps) => {
      state.loading = true;
    },
    addAgreementSuccess: (
      state: initialStateProps,
      action: { payload: { id: number; title: string; text: string } }
    ) => {
      const existingAgreement = state.agreements?.find(
        (agr) => agr.id === action.payload.id
      );
      if (existingAgreement) {
        state.agreements = state.agreements?.filter(
          (agr) => agr.id !== existingAgreement.id
        );
      } else {
        state.agreements = [...(state.agreements || []), action.payload];
      }
      state.loading = false;
      state.error = null;
    },
    addAgreementFailure: (
      state: initialStateProps,
      action: { payload: initialStateProps["error"] }
    ) => {
      state.loading = false;
      state.savedOperations = null;
      state.error = action.payload;
    },
    addNotification: (
      state: initialStateProps,
      action: { payload: { id: number; date: string; content: string } }
    ) => {
      const existingNotification = state.notifications?.find(
        (notification) => notification.id === action.payload.id
      );
      if (existingNotification) {
        state.notifications = state.notifications?.filter(
          (notification) => notification.id !== existingNotification.id
        );
      } else {
        state.notifications = [...(state.notifications || []), action.payload];
      }
      state.loading = false;
      state.error = null;
    },
    deleteNotification: (
      state: initialStateProps,
      action: { payload: { id: number; date: string; content: string } }
    ) => {
      console.log("aasdsda");
      state.notifications = state.notifications?.filter(
        (notification) => notification.id !== action.payload.id
      );
    },
    reset: () => initialState,
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
  deleteNotification,
  addNotification,
  reset,
} = authSlice.actions;

export default authSlice.reducer;
