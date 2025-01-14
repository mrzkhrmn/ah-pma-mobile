import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import { Image } from "expo-image";
import images from "@/constants/images";

const Transfer = () => {
  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <Text className="uppercase text-center font-inter-semibold text-xl mt-4">
        Transfer
      </Text>
      <View className="px-4 my-4">
        <View className="items-center">
          <Image
            contentFit="contain"
            source={images.carImage}
            style={{ width: 360, height: 150 }}
          />
        </View>
        <View>
          <Text className="font-inter-semibold text-lg mt-4">
            Transfer Bilgisi:
          </Text>
          <Text className="text-lg">Tam transfer</Text>
        </View>
        <View>
          <Text className="font-inter-semibold text-lg mt-4">
            Araç Bilgisi:
          </Text>
          <Text className="text-lg">Fiat Doblo 2024 Turbo Dizel</Text>
          <Text className="text-lg">Plaka: 34 YTS 235</Text>
        </View>
        <View>
          <Text className="font-inter-semibold text-lg mt-4">
            Şoför Bilgisi:
          </Text>
          <Text className="text-lg">Ahmet Örnekadam - 36 Yaşında Erkek</Text>
        </View>
        <View className="items-center mt-6">
          <Pressable className="bg-[#1d3587] rounded-lg px-10 py-2">
            <Text className="text-lg text-white font-inter-semibold">
              İletişim
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transfer;
