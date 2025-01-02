import { View, Text, Pressable, Keyboard, Image } from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import LogoWithBackButton from "@/components/LogoWithBackButton";

const Info = () => {
  return (
    <SafeAreaView className="">
      <LogoWithBackButton />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Text className="text-2xl text-center font-semibold my-4">
          Bilgilerim
        </Text>
        <View className="w-full px-12  gap-4">
          <View className=" flex items-center w-full">
            <Text className="text-start self-start">Ad</Text>
            <TextInput
              id="name"
              className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
            />
          </View>
          <View className=" flex items-center w-full">
            <Text className="text-start self-start">Soyad</Text>
            <TextInput
              id="surname"
              className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
            />
          </View>
          <View className=" flex items-center w-full">
            <Text className="text-start self-start">Telefon</Text>
            <TextInput
              id="phone"
              className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
            />
          </View>
          <View className=" flex items-center w-full">
            <Text className="text-start self-start">E-posta</Text>
            <TextInput
              id="email"
              className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
            />
          </View>
          <View className=" flex items-center w-full">
            <Text className="text-start self-start">Şehir</Text>
            <TextInput
              id="city"
              className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
            />
          </View>
          <View className=" flex items-center w-full">
            <Text className="text-start self-start">Address</Text>
            <TextInput
              id="address"
              className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
            />
          </View>
          <View className="items-center mt-4">
            <TouchableOpacity
              style={{
                backgroundColor: "#1d3587",
                paddingVertical: 8,
                width: 150,
                borderRadius: 5,
              }}
            >
              <Text className="text-center text-white">
                Değişiklikleri Kaydet
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Info;
