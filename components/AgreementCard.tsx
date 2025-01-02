import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useDispatch, useSelector } from "react-redux";

const AgreementCard = ({ item }: { item: any }) => {
  const { agreements } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <View className="mt-8 bg-white border border-gray-300 rounded-lg p-4">
      <Text className="text-lg font-semibold">{item.title}:</Text>
      <Text>{item.text}</Text>
      <View className="items-center mt-4">
        <Pressable className="flex flex-row items-center gap-2 border border-[#1d3587] rounded-lg  justify-center px-4 py-2">
          <Image source={icons.searchIcon} />
          <Text className="text-lg text-[#1d3587] font-semibold">İncele</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AgreementCard;
