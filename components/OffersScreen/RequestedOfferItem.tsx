import { View, Text, Pressable } from "react-native";
import React from "react";
import InspectIcon from "@/constants/InspectIcon";
import OfferPendingIcon from "@/constants/OfferPendingIcon";

const RequestedOfferItem = ({ item }: any) => {
  return (
    <View className="bg-white px-3 py-2 mt-4 border border-gray-300 rounded-md">
      <View className="flex-row justify-between items-center">
        <Text>
          <Text className="font-inter-semibold">Teklif ID:</Text> {item.id}
        </Text>
        <Text>
          <Text className="font-inter-semibold">Tarih:</Text> {item.date}
        </Text>
      </View>
      <View className=" mt-2">
        <Text className="font-inter-semibold mb-1">Operasyon:</Text>
        <Text>{item.operation}</Text>
      </View>
      <View className="items-center mt-3 mb-2">
        {item.status === "confirmed" ? (
          <Pressable className="flex-row  items-center border border-[#1d3587] rounded-md py-1 px-3 gap-1">
            <InspectIcon />
            <Text className="text-[#1d3587] font-inter-semibold">İncele</Text>
          </Pressable>
        ) : item.status === "pending" ? (
          <Pressable className="flex-row  items-center border border-[#1d3587] rounded-md py-1 px-3 gap-1">
            <OfferPendingIcon />
            <Text className="text-[#1d3587] font-inter-semibold">
              Teklif Bekliyor
            </Text>
          </Pressable>
        ) : (
          <Pressable className="flex-row  items-center border border-[#1d3587] rounded-md py-1 px-3 gap-1">
            <InspectIcon />
            <Text className="text-[#1d3587] font-inter-semibold">
              Reddedildi
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default RequestedOfferItem;
