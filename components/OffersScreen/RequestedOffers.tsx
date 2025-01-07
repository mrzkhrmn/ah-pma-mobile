import { View, Text } from "react-native";
import React from "react";
import { FlatList, Pressable } from "react-native-gesture-handler";
import { useAppSelector } from "@/context/hooks";
import RequestedOfferItem from "./RequestedOfferItem";
import NewArrowIcon from "@/constants/NewArrowIcon";

const RequestedOffers = ({ setOpenNewRequest }: any) => {
  const { offers } = useAppSelector((state) => state.auth);
  return (
    <View className=" items-center h-full pb-36 ">
      <Text className="font-inter-medium text-xl text-center mt-4">
        TEKLİFLER
      </Text>
      <FlatList
        style={{ paddingHorizontal: 1.5 }}
        data={offers}
        renderItem={({ item }) => <RequestedOfferItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <View className="items-center mt-6">
        <Pressable
          onPress={() => setOpenNewRequest(true)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#1d3587",
            paddingVertical: 4,
            paddingHorizontal: 12,
            gap: 4,
            borderRadius: 8,
          }}
          className="flex flex-row items-center bg-[#1d3587]"
        >
          <NewArrowIcon />
          <Text className="text-white font-inter-semibold">
            Yeni Teklif İste
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RequestedOffers;
