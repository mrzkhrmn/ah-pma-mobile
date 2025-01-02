import { View, Text } from "react-native";
import React, { useState } from "react";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Switch } from "react-native-gesture-handler";
import { Image } from "expo-image";
import icons from "@/constants/icons";

const Settings = () => {
  const [settingsData, setSettingsData] = useState([
    { id: 1, text: "Mesaj Bildirimleri", isEnabled: false },
    { id: 2, text: "Teklif Bildirimleri", isEnabled: false },
    { id: 3, text: "Randevu Bildirimleri", isEnabled: false },
  ]);

  const toggleSwitch = (id) => {
    setSettingsData((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id
          ? { ...setting, isEnabled: !setting.isEnabled }
          : setting
      )
    );
  };
  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <Text className="text-2xl text-center font-semibold my-4">Ayarlar</Text>
      <View className="items-center mt-4">
        {settingsData.map((setting) => (
          <View key={setting.id}>
            <View className="flex-row gap-4 w-[250px] items-center justify-between">
              <Text className="text-lg font-semibold">Mesaj Bildirimleri</Text>
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
          <Text className="text-lg font-semibold">Dil Seçimi</Text>
          <View className="flex-row gap-1 items-center">
            <Text className="text-lg">TR</Text>
            <Image
              contentFit="cover"
              source={icons.worldIcon}
              style={{ width: 24, height: 24 }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
