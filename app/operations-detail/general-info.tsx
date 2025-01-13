import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import moment from "moment";

const GeneralInfo = () => {
  const { operation } = useLocalSearchParams();

  const {
    offerId,
    operationId,
    date,
    newOperations,
    sleepTime,
    hospital,
    operationDetails,
    preOperativeRequests,
  } = operation ? JSON.parse(operation as string) : null;

  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <View className="flex-row items-center justify-between px-4 mt-4">
        <View className="flex-row items-center">
          <Text className="font-inter-semibold">Teklif ID: </Text>
          <Text className="text-black">{offerId}</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="font-inter-semibold">Tarih ID: </Text>
          <Text className="text-black">
            {moment(date.startDate).format("MMMM Do YYYY")}
          </Text>
        </View>
      </View>
      <View className="px-4 mt-4">
        <View className="flex-row items-center mb-2">
          <Text className="font-inter-semibold">Operation ID: </Text>
          <Text className="text-black">{operationId}</Text>
        </View>
        {newOperations.map((operation: any, i: number) => (
          <Text key={i}>{operation}</Text>
        ))}
        <View className="flex-row items-center my-3">
          <Text className="font-inter-semibold">Operasyon Fiyatı: </Text>
          <Text>83.000TL</Text>
        </View>
        <View className=" justify-center my-1">
          <Text className="font-inter-semibold">
            Operasyonu Gerçkeleştirecek Doktor:{" "}
          </Text>
          <Text className="mt-1">Prof. Dr. Erkan Vural</Text>
        </View>
        <View className=" justify-center my-2">
          <Text className="font-inter-semibold">Operasyon Tarihi: </Text>
          <Text className="mt-1">
            {moment(date.endDate).format("MMMM Do YYYY")}
          </Text>
        </View>
        <View className="flex-row items-center mt-1">
          <Text className="font-inter-semibold">Yatış Süresi: </Text>
          <Text>{sleepTime} Gece</Text>
        </View>
        <View className="flex-row items-center mt-3">
          <Text className="font-inter-semibold">Hastane: </Text>
          <Text>{hospital}</Text>
        </View>
        <View className=" justify-center mt-3">
          <Text className="font-inter-semibold">Operasyon Detayları: </Text>
          <Text className="mt-1">{operationDetails}</Text>
        </View>
        <View className=" justify-center mt-3">
          <Text className="font-inter-semibold">
            Operasyon Öncesi Talep Edilenler:{" "}
          </Text>
          <Text className="mt-1">{preOperativeRequests}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GeneralInfo;
