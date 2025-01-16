import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoWithBackButton from "@/components/LogoWithBackButton";

const ImportantSubject = () => {
  const [activeTab, setActiveTab] = useState("before");
  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <Text className="text-xl font-inter-semibold text-center my-4 uppercase">
        Önemli Konular
      </Text>
      <View className="px-4">
        <View className="flex-row items-center justify-between">
          <Pressable
            onPress={() => {
              if (activeTab === "before") {
                return;
              }
              setActiveTab("before");
            }}
            className={`${
              activeTab === "before"
                ? "bg-[#1d3587]"
                : "bg-white border border-[#1d3587]"
            } rounded-lg`}
          >
            <Text
              className={` ${
                activeTab === "before" ? "text-white" : "text-[#1d3587]"
              } font-inter-semibold px-6 py-2`}
            >
              Ameliyat Öncesi
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              if (activeTab === "after") {
                return;
              }
              setActiveTab("after");
            }}
            className={`${
              activeTab === "after"
                ? "bg-[#1d3587]"
                : "bg-white border border-[#1d3587]"
            } rounded-lg`}
          >
            <Text
              className={` ${
                activeTab === "after" ? "text-white" : "text-[#1d3587]"
              } font-inter-semibold px-6 py-2`}
            >
              Ameliyat Sonrası
            </Text>
          </Pressable>
        </View>
        <Text className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nihil
          quibusdam sit incidunt laboriosam porro non. Aliquam, ex iure ipsum
          expedita tempore impedit alias, enim distinctio omnis, incidunt quas
          aperiam.
        </Text>
      </View>
      <View className="justify-end items-end h-[400px] px-4">
        <View className="gap-4">
          <Pressable className="bg-white border border-[#1d3587] rounded-lg px-6 py-2">
            <Text className="text-lg text-[#1d3587]">Paylaş</Text>
          </Pressable>
          <Pressable className="bg-white border border-[#1d3587] rounded-lg px-6 py-2">
            <Text className="text-lg text-[#1d3587]">Yazdır</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ImportantSubject;
