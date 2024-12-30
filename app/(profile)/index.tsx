import { Text, SafeAreaView, View, Pressable, ScrollView } from "react-native";
import React from "react";
import { Link, Stack, router } from "expo-router";
import { Image } from "react-native";
import images from "@/constants/images";
import { useDispatch, useSelector } from "react-redux";
import icons from "@/constants/icons";
import {
  logoutFailure,
  logoutStart,
  logoutSuccess,
} from "@/context/slices/authSlice";

const index = () => {
  const { authUser } = useSelector((state) => state.auth);

  const profileLinksData = [
    {
      text: "Hakkımızda",
      link: "about",
    },
    {
      text: "Doktorlarımız",
      link: "doctors",
    },
    {
      text: "Operasyonlar",
      link: "operations",
    },
    {
      text: "Bilgilerim",
      link: "info",
    },
    {
      text: "Bildirimler",
      link: "about",
    },
    {
      text: "Kaydettiklerim",
      link: "about",
    },
    {
      text: "Sözleşmeler",
      link: "about",
    },
    {
      text: "İletişim Bilgileri",
      link: "about",
    },
    {
      text: "Ayarlar",
      link: "about",
    },

    {
      text: "Ayarlar",
      link: "about",
    },
    {
      text: "Ayarlar",
      link: "about",
    },
    {
      text: "Ayarlar",
      link: "about",
    },
    {
      text: "Ayarlar",
      link: "about",
    },
    {
      text: "Ayarlar",
      link: "about",
    },
  ];

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutStart());
    try {
      dispatch(logoutSuccess());
      router.replace("/sign-in");
      console.log("Logged out");
    } catch (error: any) {
      dispatch(logoutFailure(error.message));
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 pt-4 items-center w-[250px] mx-auto">
      <View className="absolute -left-8  top-8 p-3">
        <Pressable className="p-4" onPress={() => router.back()}>
          <Image source={icons.backIcon} />
        </Pressable>
      </View>
      <Image source={images.logoImage} />
      <ScrollView className="mt-6 flex  bg-white rounded-lg w-full  pt-4 pb-8">
        <Text className=" text-3xl font-semibold text-center">Hoşgeldiniz</Text>
        <Text className="text-center text-xl mt-1 font-semibold">
          Sn. {authUser.username}
        </Text>
        <View className="justify-start items-start w-full pl-5">
          {profileLinksData.map((data, index) => (
            <View className="w-full" key={index}>
              <View className="flex-row items-center gap-4  mt-4 w-full border-dashed border-b  border-black/10">
                <Image source={icons.flterIcon} className="w-5 h-5" />
                <Link
                  href={`/${data.link}`}
                  className=" flex items-center text-2xl font-light w-full"
                >
                  {data.text}
                </Link>
              </View>
              <View className="h-.5 w-full border border-black border-dashed mt-1"></View>
            </View>
          ))}
          <View className="w-full">
            <View className="flex-row items-center gap-4  mt-4 w-full border-dashed border-b  border-black/10">
              <Image source={icons.flterIcon} className="w-5 h-5" />
              <Pressable onPress={handleLogout} className="w-full">
                <Text className=" flex items-center text-2xl font-light">
                  Çıkış Yap
                </Text>
              </Pressable>
            </View>
            <View className="h-.5 w-full border border-black border-dashed mt-1"></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
