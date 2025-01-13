import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const OperationsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="general-info" />
      <Stack.Screen name="tests" />
    </Stack>
  );
};

export default OperationsLayout;
