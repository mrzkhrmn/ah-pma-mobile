import { View, Text, ImageBackground, Dimensions, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
const CarouselItem = ({ item }: { item: any }) => {
  const inset = useSafeAreaInsets();

  return (
    <ImageBackground
      resizeMode="cover"
      style={{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
      }}
      source={item.image}
    >
      {item.id !== 3 ? (
        <View className={` justify-end h-full pb-[${inset.bottom}px] `}>
          <LinearGradient
            colors={["#ffffff40", "#ffffff"]}
            className="flex-1 flex"
          >
            <Text className="py-24   text-[32px] leading-[40px] text-black text-center ">
              {item.title}
            </Text>
          </LinearGradient>
        </View>
      ) : (
        <View
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
          }}
          className="flex-1"
        >
          <Text className=" text-center mt-10  text-[32px] leading-[40px] text-black">
            {item.title}
          </Text>
        </View>
      )}
    </ImageBackground>
  );
};

export default CarouselItem;
