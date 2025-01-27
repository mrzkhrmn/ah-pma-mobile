import { View, Text, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import icons from "@/constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import { FlatList } from "react-native-gesture-handler";
import { useAppSelector } from "@/context/hooks";
import { useDispatch } from "react-redux";
import { deleteNotification } from "@/context/slices/authSlice";

const NotificationCard = ({ item, onDelete }: { item: any; onDelete: any }) => {
  return (
    <View className="bg-white rounded-lg border border-gray-300 px-3 py-2 mt-6">
      <Text>
        Tarih: <Text> {item.date}</Text>
      </Text>
      <Text className="my-2">Lorem:</Text>
      <Text className="leading-6">{item.content}</Text>
      <View className="items-center">
        <Pressable
          onPress={onDelete}
          className="flex flex-row items-center border border-[#1d3587] rounded-lg gap-2 px-5 py-2  justify-center mt-4"
        >
          <Image source={icons.deleteIcon} style={{ width: 16, height: 16 }} />
          <Text className="text-[#1d3587] text-lg font-inter-semibold ">
            Sil
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const Notifications = () => {
  const { notifications } = useAppSelector((state: any) => state.auth);

  const dispatch = useDispatch();

  const handleDelete = (item: any) => {
    dispatch(deleteNotification(item));
  };

  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <Text className="uppercase font-inter-medium text-center text-xl mt-4">
        Bildirimler
      </Text>
      <View className="items-center px-[0.6rem] pb-52">
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <NotificationCard item={item} onDelete={() => handleDelete(item)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
