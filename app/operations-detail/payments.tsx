import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import FileIcon from "@/constants/FileIcon";
import ApproveIcon from "@/constants/ApproveIcon";
import TrashIcon from "@/constants/TrashIcon";

const Payments = () => {
  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <Text className="text-xl font-inter-semibold text-center uppercase my-4">
        Ödemeler
      </Text>
      <View className="px-4">
        <Text className="font-inter-semibold text-lg mt-4">
          Ön Ödeme: 50.000TL
        </Text>
        <View className="bg-white border border-[#1d3587] rounded-lg py-1 px-4 mt-3 flex-row justify-between items-center">
          <View className="flex-row items-center gap-2">
            <FileIcon />
            <ApproveIcon />
          </View>
          <Text className="text-center pr-10 text-[#1d3587]">Dekont.pdf</Text>
          <Pressable>
            <TrashIcon />
          </Pressable>
        </View>
        <Text className="font-inter-semibold text-lg mt-4">
          Kalan: 70.000TL
        </Text>
        <View className="mt-4">
          <Text className="text-lg font-inter-semibold">Banka Adı:</Text>
          <Text className="text-lg ">T. Garanti Bankası A.Ş.</Text>
        </View>
        <View className="mt-4">
          <Text className="text-lg font-inter-semibold">Şube Adı:</Text>
          <Text className="text-lg ">Kazasker</Text>
        </View>
        <View className="mt-4">
          <Text className="text-lg font-inter-semibold">Şube Kodu:</Text>
          <Text className="text-lg ">163</Text>
        </View>
        <View className="mt-4">
          <Text className="text-lg font-inter-semibold">Hesap Adı:</Text>
          <Text className="text-lg ">PMT Teknoloji Hizmetleri</Text>
        </View>
        <View className="mt-4">
          <Text className="text-lg font-inter-semibold">IBAN:</Text>
          <Text className="text-lg ">TR12 0006 1005 1827 2323 2523 01</Text>
        </View>
        <View className="mt-4">
          <Text className="text-lg font-inter-semibold">SWIFT Kodu:</Text>
          <Text className="text-lg ">AAAA-BB-CC-123</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payments;
