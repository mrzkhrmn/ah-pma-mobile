import { FlatList, Image, Pressable, SafeAreaView, View } from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
import HomeCard from "@/components/HomeCard";

export default function Home() {
  const itemData = [
    {
      id: 1,
      title: "Artık Yılların Hesabını Yapmayın...",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Artık Yılların Hesabını Yapmayın...",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Artık Yılların Hesabını Yapmayın...",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <SafeAreaView className="h-full">
      <View className="px-5 pb-16">
        <View className="flex flex-row  items-center justify-between ">
          <Pressable>
            <Image source={icons.flterIcon} />
          </Pressable>
          <Image source={images.logoImage} />
          <Pressable onPress={() => router.push("/(profile)")}>
            <Image source={icons.profileIcon} />
          </Pressable>
        </View>
        <FlatList
          data={itemData}
          renderItem={({ item }) => <HomeCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
