import { View, Text, Pressable } from "react-native";
import React from "react";
import InspectIcon from "@/constants/InspectIcon";
import OfferPendingIcon from "@/constants/OfferPendingIcon";
import Moment from "moment";

const RequestedOfferItem = ({ item, setSelectedOffer }: any) => {
  return (
    <View className="bg-white  px-3 py-2 mt-4 border border-gray-300 rounded-md">
      <View className="flex-row gap-10 justify-between items-center">
        <Text>
          <Text className="font-inter-semibold">Teklif ID:</Text> {item.id}
        </Text>
        <Text>
          <Text className="font-inter-semibold">Tarih:</Text>
          {Moment(item.date.startDate).format("MMMM Do YYYY")}
        </Text>
      </View>
      <View className=" mt-2">
        <Text className="font-inter-semibold mb-1">Operasyon:</Text>
        {item.newOperations.map((operation: any, index: number) => (
          <Text key={index}>{operation}</Text>
        ))}
      </View>
      <View className="items-center mt-3 mb-2">
        {item.status === "confirmed" ? (
          <Pressable
            onPress={() => setSelectedOffer(item)}
            className="flex-row  items-center border border-[#1d3587] rounded-md py-1 px-3 gap-1"
          >
            <InspectIcon color={"#1d3587"} />
            <Text className="text-[#1d3587]">İncele</Text>
          </Pressable>
        ) : item.status === "pending" ? (
          <Pressable className="flex-row  items-center border border-yellow-600 rounded-md py-1 px-3 gap-1">
            <OfferPendingIcon />
            <Text className="text-yellow-600">Teklif Bekliyor</Text>
          </Pressable>
        ) : (
          <Pressable className="flex-row  items-center border border-red-600 rounded-md py-1 px-3 gap-1">
            <InspectIcon color={"#dc2626"} />
            <Text className="text-red-600">Reddedildi</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default RequestedOfferItem;
