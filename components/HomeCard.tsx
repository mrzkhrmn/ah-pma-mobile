import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";

const HomeCard = ({ item }: { item: any }) => {
  return (
    <View className="h-[300px]  relative  rounded-lg overflow-hidden mt-6">
      <Image
        source={images.oldWomen}
        resizeMode="cover"
        className=" absolute top-0 left-0   w-full  h-full overflow-hidden rounded-lg"
      />
      <View className="bg-white w-full  absolute bottom-0 left-0 px-4 py-2">
        <View className="flex flex-row   justify-between ">
          <Text className="text-[16px]">{item.title}</Text>
          <View className="flex flex-row gap-2">
            <Pressable>
              <Image source={icons.shareIcon} />
            </Pressable>
            <Pressable>
              <Image source={icons.shareIcon} />
            </Pressable>
          </View>
        </View>
        <Text className="text-[12px] mt-4">{item.text}</Text>
      </View>
    </View>
  );
};

export default HomeCard;
