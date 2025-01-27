import { View, Text, Pressable } from "react-native";
import React from "react";
import moment from "moment";
import { Image } from "expo-image";
import InfoIcon from "@/constants/InfoIcon";

const OperationsCard = ({ item, onSelect }: any) => {
  return (
    <View className="bg-white px-2 py-1 mt-4">
      <View className="flex-row justify-between ">
        <Text>
          <Text className="font-inter-semibold">Teklif ID: </Text>
          <Text>{item.offerId}</Text>
        </Text>
        <Text>
          <Text className="font-inter-semibold">Tarih: </Text>
          <Text>{moment(item.date.startDate).format("MMMM Do YYYY")}</Text>
        </Text>
      </View>
      <Text className="my-2">
        <Text className="font-inter-semibold">Operasyon ID: </Text>
        <Text>{item.operationId}</Text>
      </Text>
      <View>
        {item.newOperations.map((operation: string, i: number) => (
          <Text key={i}>{operation}</Text>
        ))}
      </View>
      <View className="items-center py-2">
        <Pressable
          onPress={() => {
            onSelect(item);
          }}
          className="flex-row items-center border border-[#1d3587] px-2 py-1 rounded-md"
        >
          <InfoIcon />
          <Text className="text-[#1d3587]">Detaylar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OperationsCard;
