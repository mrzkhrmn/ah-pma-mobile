import { View, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import CarouselItem from "../../components/CarouselItem";
import carouselData from "../../constants/slides";
import Paginator from "@/components/Paginator";
import slides from "../../constants/slides";
import { Redirect, router } from "expo-router";
import { useSelector } from "react-redux";

const index = () => {
  const { authUser } = useSelector((state) => state.auth);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLastItem, setIsLastItem] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    const currentItemIndex = viewableItems[0]?.index;
    setCurrentIndex(currentItemIndex);
    setIsLastItem(currentItemIndex === carouselData.length - 1); // Son öğeye gelindi mi kontrolü
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleEndReached = () => {
    setIsLastItem(true);
  };

  const handleScrollEnd = (event: any) => {
    if (isLastItem) {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const contentWidth = event.nativeEvent.contentSize.width / 2;

      if (contentOffsetX >= contentWidth) {
        router.replace("/sign-in");
      }
    }
  };

  if (authUser) return <Redirect href={"/(tabs)/home"} />;

  return (
    <View className="flex-1">
      <FlatList
        data={carouselData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CarouselItem item={item} />}
        pagingEnabled={true}
        showsHorizontalScrollIndicator
        onScroll={handleScroll}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        horizontal
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        onScrollEndDrag={handleScrollEnd}
      />
      <Paginator data={slides} scrollX={scrollX} />
    </View>
  );
};

export default index;
