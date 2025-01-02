import { View, Text, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";

const LogoWithBackButton = () => {
  return (
    <View className="justify-center">
      <View className="absolute left-6   p-3">
        <Pressable className="p-4" onPress={() => router.back()}>
          <Image source={icons.backIcon} style={{ width: 18, height: 18 }} />
        </Pressable>
      </View>
      <View className="items-center">
        <Image source={images.logoImage} style={{ width: 95, height: 50 }} />
      </View>
    </View>
  );
};

export default LogoWithBackButton;
