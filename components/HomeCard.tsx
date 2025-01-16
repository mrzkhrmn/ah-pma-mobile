import { View, Text, Pressable } from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useDispatch, useSelector } from "react-redux";
import {
  saveOperationFailure,
  saveOperationStart,
  saveOperationSuccess,
} from "@/context/slices/authSlice";
import { Image } from "expo-image";
const HomeCard = ({ item }: { item: any }) => {
  const { savedOperations } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handlePressSave = () => {
    dispatch(saveOperationStart());
    try {
      dispatch(saveOperationSuccess(item));
    } catch (error) {
      console.log(error.message);
      dispatch(saveOperationFailure(error.message));
    }
  };
  return (
    <View className="h-[300px] w-full  relative  rounded-lg overflow-hidden mt-6">
      <Image
        source={images.oldWomen}
        contentFit="cover"
        className=" absolute top-0 left-0  overflow-hidden rounded-lg"
        style={{ width: 320, height: 290 }}
      />
      <View className="bg-white w-full  absolute bottom-0 left-0 px-4 py-2">
        <View className="flex flex-row   justify-between ">
          <Text className="text-[16px] font-inter">{item.title}</Text>
          <View className="flex flex-row gap-2">
            <Pressable onPress={handlePressSave}>
              {savedOperations?.length !== null &&
              savedOperations?.find((operation) => operation.id === item.id) ? (
                <Image
                  source={icons.savedIcon}
                  contentFit="cover"
                  style={{ width: 18, height: 18 }}
                />
              ) : (
                <Image
                  source={icons.saveIcon}
                  contentFit="cover"
                  style={{ width: 18, height: 18 }}
                />
              )}
            </Pressable>
            <Pressable>
              <Image
                source={icons.shareIcon}
                contentFit="cover"
                style={{ width: 18, height: 18 }}
              />
            </Pressable>
          </View>
        </View>
        <Text className="text-[14px] mt-4">{item.text}</Text>
      </View>
    </View>
  );
};

export default HomeCard;
