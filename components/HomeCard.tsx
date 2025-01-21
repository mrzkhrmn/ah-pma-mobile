import { View, Text, Pressable, Animated } from "react-native";
import React, { useRef, useState } from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useDispatch, useSelector } from "react-redux";
import {
  saveOperationFailure,
  saveOperationStart,
  saveOperationSuccess,
} from "@/context/slices/authSlice";
import { Image } from "expo-image";
import { FlatList } from "react-native-gesture-handler";
import Paginator from "./Paginator";
import SaveIcon from "@/constants/SaveIcon";
import ShareMediaIcon from "@/constants/ShareMediaIcon";

const HomeCard = ({ item }: { item: any }) => {
  const [imagesData, setImagesData] = useState([
    images.oldWomen,
    images.oldWomen,
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { savedOperations } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const handlePressSave = () => {
    dispatch(saveOperationStart());
    try {
      dispatch(saveOperationSuccess(item));
    } catch (error: any) {
      console.log(error.message);
      dispatch(saveOperationFailure(error.message));
    }
  };

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    const currentItemIndex = viewableItems[0]?.index;
    setCurrentIndex(currentItemIndex);
  }).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );
  return (
    <View className="h-[300px] w-full  relative  rounded-lg overflow-hidden mt-6">
      <View className="w-full">
        <FlatList
          data={imagesData}
          horizontal
          pagingEnabled={true}
          bounces={false}
          renderItem={({ item }) => (
            <Image
              source={item}
              contentFit="cover"
              style={{ width: 285, height: 290 }}
            />
          )}
          onScroll={handleScroll}
          onViewableItemsChanged={viewableItemsChanged}
        />
        <View className="-mt-8">
          <Paginator data={imagesData} scrollX={scrollX} />
        </View>
      </View>
      <View className="bg-white w-full  absolute bottom-0 left-0  py-2">
        <View className="flex flex-row   justify-between px-2">
          <Text className="text-[16px] font-inter">{item.title}</Text>
          <View className="flex flex-row gap-2">
            <Pressable onPress={handlePressSave}>
              {savedOperations?.length !== null &&
              savedOperations?.find(
                (operation: any) => operation.id === item.id
              ) ? (
                <SaveIcon active={true} />
              ) : (
                <SaveIcon active={false} />
              )}
            </Pressable>
            <Pressable>
              <ShareMediaIcon />
            </Pressable>
          </View>
        </View>
        <Text className="text-[14px] mt-2 px-2 font-inter-light">
          {item.text}
        </Text>
      </View>
    </View>
  );
};

export default HomeCard;
