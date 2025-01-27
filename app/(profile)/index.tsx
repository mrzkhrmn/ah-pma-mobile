import { Text, SafeAreaView, View, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { useDispatch } from "react-redux";
import { logoutFailure, logoutStart, reset } from "@/context/slices/authSlice";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import Modal from "react-native-modal";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/context/hooks";
import DoctorsIcon from "@/constants/DoctorsIcon";
import OperationsIcon from "@/constants/OperationsIcon";
import UserIcon from "@/constants/UserIcon";
import NotificationsIcon from "@/constants/NotificationsIcon";
import SaveIcon from "@/constants/SaveIcon";
import AgreementsIcon from "@/constants/AgreementsIcon";
import MailIcon from "@/constants/MailIcon";
import SettingsIcon from "@/constants/SettingsIcon";
import LogoutIcon from "@/constants/LogoutIcon";

const index = () => {
  const { t } = useTranslation();
  const { authUser } = useAppSelector((state) => state.auth);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const profileLinksData = [
    {
      text: "profile.about",
      link: "about",
      icon: <DoctorsIcon />,
    },
    {
      text: "profile.doctors",
      link: "doctors",
      icon: <DoctorsIcon />,
    },
    {
      text: "profile.operations",
      link: "operations",
      icon: <OperationsIcon />,
    },
    {
      text: "profile.info",
      link: "info",
      icon: <UserIcon />,
    },
    {
      text: "profile.notifications",
      link: "notifications",
      icon: <NotificationsIcon />,
    },
    {
      text: "profile.saves",
      link: "saves",
      icon: <SaveIcon />,
    },
    {
      text: "profile.agreements",
      link: "agreements",
      icon: <AgreementsIcon />,
    },
    {
      text: "profile.contactInfo",
      link: "contact-info",
      icon: <MailIcon />,
    },
    {
      text: "profile.settings",
      link: "settings",
      icon: <SettingsIcon />,
    },
  ];

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutStart());
    try {
      // dispatch(logoutSuccess());
      dispatch(reset());
      router.replace("/sign-in");
    } catch (error: any) {
      dispatch(logoutFailure(error.message));
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <View className="pb-32 pt-4   mx-auto">
        <ScrollView className="mt-6 flex  bg-white rounded-lg w-full  pt-4 pb-8">
          <Text className=" text-3xl font-inter-semibold text-center">
            {t("profile.title")}
          </Text>
          <Text className="text-center text-xl mt-1 font-semibold">
            Sn. {authUser.username}
          </Text>
          <View className="w-[250px]">
            <View className="justify-start items-start w-full pl-5">
              {profileLinksData.map((data, index) => (
                <View className="w-full" key={index}>
                  <View className="flex-row items-center gap-2  mt-4 w-full border-dashed border-b  border-black/10">
                    {data.icon}
                    <Link
                      href={`/${data.link}`}
                      className=" flex items-center text-2xl font-light w-full"
                    >
                      {t(`${data.text}`)}
                    </Link>
                  </View>
                  <View className="h-.5 w-full border border-black border-dashed mt-1"></View>
                </View>
              ))}
              <View className="w-full">
                <View className="flex-row items-center gap-2  mt-4 w-full border-dashed border-b  border-black/10">
                  <LogoutIcon />
                  <Pressable
                    onPress={() => setIsModalVisible(true)}
                    className="w-full"
                  >
                    <Text className=" flex items-center text-2xl font-light">
                      {t("profile.exit")}
                    </Text>
                  </Pressable>
                </View>
                <View className="h-.5 w-full border border-black border-dashed mt-1"></View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      {isModalVisible && (
        <Modal
          onBackdropPress={() => setIsModalVisible(false)}
          shouldRasterizeIOS={false}
          isVisible={isModalVisible}
          className=" items-center"
        >
          <View
            style={{
              flex: 0,
              backgroundColor: "white",
              height: 140,
              width: 250,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          >
            <Text className="text-[16px] text-center">
              Uygulamadan çıkış yapmak istediğinize emin misiniz?!
            </Text>
            <View className="flex-row mt-4 items-center gap-4">
              <Pressable
                className="bg-white border border-[#1d3587] w-[80px] px-4 py-2 rounded-lg"
                onPress={() => setIsModalVisible(false)}
              >
                <Text className="text-center text-[16px]  text-[#1d3587]">
                  İptal
                </Text>
              </Pressable>
              <Pressable
                className="bg-[#1D3587] px-4 py-2 font-semibold rounded-lg w-[80px]"
                onPress={handleLogout}
              >
                <Text className="text-white text-[16px] text-center">
                  Tamam
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default index;
