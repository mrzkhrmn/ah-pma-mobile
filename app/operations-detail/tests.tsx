import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import FileIcon from "@/constants/FileIcon";
import ApproveIcon from "@/constants/ApproveIcon";
import TrashIcon from "@/constants/TrashIcon";
import { Pressable } from "react-native-gesture-handler";

const Tests = () => {
  const [tests, setTests] = useState([
    { testName: "Tam kan sayımı", fileName: "Test1.jpg" },
    { testName: "Koagülasyon testi", fileName: "" },
  ]);
  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <Text className="font-inter-semibold text-xl text-center mt-4 uppercase">
        Testler
      </Text>
      {tests.map((test, index) => (
        <View key={index} className="px-4 mt-4">
          <Text className="text-lg font-inter-semibold">Tam kan sayımı:</Text>
          {test.fileName ? (
            <View className="bg-white border border-[#1d3587] rounded-lg py-1 px-4 mt-3 flex-row justify-between items-center">
              <View className="flex-row items-center gap-2">
                <FileIcon />
                <ApproveIcon />
              </View>
              <Text className="text-center pr-10 text-[#1d3587]">
                {test.fileName}
              </Text>
              <Pressable>
                <TrashIcon />
              </Pressable>
            </View>
          ) : (
            <View className="bg-[#1d3587] rounded-lg mt-2">
              <Pressable>
                <Text className="text-white text-center py-2 text-lg font-inter-semibold">
                  Test Ekle
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Tests;
