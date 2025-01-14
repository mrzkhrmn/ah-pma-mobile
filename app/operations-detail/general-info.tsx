import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import moment from "moment";
import Checkbox from "expo-checkbox";
import { ScrollView } from "react-native-gesture-handler";

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
      <ScrollView>
        <LogoWithBackButton />
        <View className="flex-row items-center justify-between px-4 mt-4">
          <View className="flex-row items-center">
            <Text className="font-inter-semibold text-lg">Teklif ID: </Text>
            <Text className="text-black text-lg">{offerId}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="font-inter-semibold text-lg">Tarih ID: </Text>
            <Text className="text-black text-lg">
              {moment(date.startDate).format("MMMM Do YYYY")}
            </Text>
          </View>
        </View>
        <View className="px-4 mt-4">
          <View className="flex-row items-center mb-2">
            <Text className="font-inter-semibold text-lg">Operation ID: </Text>
            <Text className="text-black text-lg">{operationId}</Text>
          </View>
          {newOperations.map((operation: any, i: number) => (
            <Text key={i} className="text-lg">
              {operation}
            </Text>
          ))}
          <View className="flex-row items-center my-3">
            <Text className="font-inter-semibold text-lg">
              Operasyon Fiyatı:{" "}
            </Text>
            <Text className="text-lg">83.000TL</Text>
          </View>
          <View className=" justify-center my-1">
            <Text className="font-inter-semibold text-lg">
              Operasyonu Gerçkeleştirecek Doktor:{" "}
            </Text>
            <Text className="mt-1 text-lg">Prof. Dr. Erkan Vural</Text>
          </View>
          <View className=" justify-center my-2">
            <Text className="font-inter-semibold text-lg">
              Operasyon Tarihi:{" "}
            </Text>
            <Text className="mt-1 text-lg">
              {moment(date.endDate).format("MMMM Do YYYY")}
            </Text>
          </View>
          <View className="flex-row items-center mt-1">
            <Text className="font-inter-semibold text-lg">Yatış Süresi: </Text>
            <Text className="text-lg">{sleepTime} Gece</Text>
          </View>
          <View className="flex-row items-center mt-3">
            <Text className="font-inter-semibold text-lg">Hastane: </Text>
            <Text className="text-lg">{hospital}</Text>
          </View>
          <View className=" justify-center mt-3">
            <Text className="font-inter-semibold text-lg">
              Operasyon Detayları:{" "}
            </Text>
            <Text className="mt-1 text-lg">{operationDetails}</Text>
          </View>
          <View className=" justify-center mt-3">
            <Text className="font-inter-semibold text-lg">
              Operasyon Öncesi Talep Edilenler:{" "}
            </Text>
            <Text className="mt-1 text-lg">{preOperativeRequests}</Text>
          </View>
          <View className="mt-3">
            <Text className="font-inter-semibold text-lg">Özel Tercihler</Text>
            <View className="flex flex-row gap-4  duration-300">
              <View className="flex flex-row items-center gap-1 ">
                <Checkbox
                  style={{
                    borderWidth: 1,
                    borderRadius: 7,
                    width: 20,
                    height: 20,
                  }}
                  color={"#00000053"}
                  className="rounded-lg border overflow-hidden"
                  value={true}
                />
                <Text className="text-[16px] ">Transfer</Text>
              </View>
              <View className="flex flex-row items-center gap-1   my-6">
                <Checkbox
                  style={{
                    borderWidth: 1,
                    borderRadius: 7,
                    width: 20,
                    height: 20,
                  }}
                  color={"#00000053"}
                  className="rounded-lg border overflow-hidden"
                  value={true}
                />
                <Text className="text-[16px] ">Konaklama</Text>
              </View>
            </View>
            <View className=" justify-center ">
              <Text className="font-inter-semibold text-lg">
                Toplam fiyat: 120.000TL{" "}
              </Text>
              <Text className="mt-1 text-lg">Ön Ödeme: 12.000TL</Text>
            </View>
          </View>
        </View>
        <View className="flex-row items-center justify-center mt-6 gap-4">
          <Pressable className="bg-[#1d3587] py-3 px-6 rounded-lg">
            <Text className="text-white font-inter-semibold">Paylaş</Text>
          </Pressable>
          <Pressable className="bg-[#1d3587] py-3 px-6 rounded-lg">
            <Text className="text-white font-inter-semibold ">Yazdır</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GeneralInfo;
