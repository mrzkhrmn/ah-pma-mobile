import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { useSelector } from "react-redux";
import { router } from "expo-router";
import AgreementCard from "@/components/AgreementCard";
import { FlatList } from "react-native-gesture-handler";
import LogoWithBackButton from "@/components/LogoWithBackButton";

const Agreements = () => {
  const { agreements } = useSelector((state) => state.auth);
  console.log(agreements);

  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <Text className="text-2xl text-center font-semibold mt-4">
        Sözleşmeler
      </Text>
      <View className="px-5 pb-64">
        <FlatList
          data={agreements}
          renderItem={({ item }) => <AgreementCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Agreements;
