import { Stack, useNavigation } from "expo-router";
import "./global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../context/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView>
          <Stack screenOptions={{ headerShown: false }} />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}
