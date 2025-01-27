import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, Switch } from "react-native-gesture-handler";
import { Image } from "expo-image";
import icons from "@/constants/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const [settingsData, setSettingsData] = useState([
    { id: 1, text: "settings.messageNotifications", isEnabled: false },
    { id: 2, text: "settings.offerNotifications", isEnabled: false },
    { id: 3, text: "settings.dateNotifications", isEnabled: false },
  ]);

  const toggleSwitch = (id: number) => {
    setSettingsData((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id
          ? { ...setting, isEnabled: !setting.isEnabled }
          : setting
      )
    );
  };

  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem("language");
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, [i18n]);

  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <Text className="text-2xl text-center font-semibold my-4">
        {t("settings.title")}
      </Text>
      <View className="items-center mt-4">
        {settingsData.map((setting) => (
          <View key={setting.id}>
            <View className="flex-row gap-4 w-[250px] items-center justify-between">
              <Text className="text-lg font-semibold">
                {t(`${setting.text}`)}
              </Text>
              <Switch
                trackColor={{ false: "#bfbfbf", true: "#e9e9e9" }}
                thumbColor={setting.isEnabled ? "#1D3587" : "#f4f3f4"}
                ios_backgroundColor="#adadad"
                onValueChange={() => toggleSwitch(setting.id)}
                value={setting.isEnabled}
              />
            </View>
            <View className="h-0.5 bg-gray-300 my-6 w-[250px]"></View>
          </View>
        ))}
        <View className="flex-row gap-4 w-[250px] items-center justify-between">
          <Text className="text-lg font-semibold">
            {t("settings.languageChoose")}
          </Text>
          <Pressable
            onPress={() =>
              currentLanguage === "en-US"
                ? changeLanguage("tr-TR")
                : changeLanguage("en-US")
            }
          >
            <View className="flex-row gap-1 items-center">
              <Text className="text-lg">
                {currentLanguage === "tr-TR" ? "TR" : "EN"}
              </Text>
              <Image
                contentFit="cover"
                source={icons.worldIcon}
                style={{ width: 24, height: 24 }}
              />
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
