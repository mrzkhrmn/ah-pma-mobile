import { View, Text } from "react-native";
import React from "react";
import StarFullIcon from "@/constants/StarFullIcon";

const Stars = () => {
  return (
    <View className="flex-row items-center">
      <StarFullIcon />
      <StarFullIcon />
      <StarFullIcon />
      <StarFullIcon />
    </View>
  );
};

export default Stars;
