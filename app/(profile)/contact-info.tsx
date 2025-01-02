import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { FlatList, Pressable, TextInput } from "react-native-gesture-handler";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import { Image } from "expo-image";
const ContactInfo = () => {
  const imagesData = [
    {
      id: 1,
      image: images.receptionImage,
    },
    {
      id: 2,
      image: images.receptionImage,
    },
    {
      id: 3,
      image: images.receptionImage,
    },
  ];

  const hospitalDropdownData = [{ value: "Amerikan", label: "Amerikan" }];

  const [value, setValue] = useState("asd");
  return (
    <SafeAreaView className="">
      <LogoWithBackButton />
      <View>
        <Text className="text-2xl text-center items-center font-semibold my-4">
          İletişim Bilgileri
        </Text>
        <View className="mx-auto">
          <Dropdown
            style={styles.dropdown}
            inputSearchStyle={styles.dropdown}
            selectedTextStyle={styles.dropdown}
            placeholderStyle={styles.dropdown}
            data={hospitalDropdownData}
            labelField={"label"}
            valueField={"value"}
            placeholder="Hastane Seç"
            onChange={() => {}}
          />
        </View>
        <View className="px-4 mt-4">
          <FlatList
            contentContainerStyle={{ gap: 10 }}
            data={imagesData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Image
                key={item.id}
                source={item.image}
                contentFit="cover"
                style={{ width: 220, height: 165 }}
              />
            )}
            horizontal
          />
        </View>
        <View className="px-4 mt-4">
          <View className="flex-row items-center gap-[6px]">
            <Image
              source={icons.saveIcon}
              contentFit="cover"
              style={{ width: 18, height: 18 }}
            />
            <Text className="text-xl">Adres:</Text>
          </View>
          <Text className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <View className="items-center">
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderColor: "#1d3587",
                borderStyle: "solid",
                borderWidth: 1,
                backgroundColor: "white",
                borderRadius: 8,
                paddingHorizontal: 15,
                paddingVertical: 8,
                gap: 5,
                marginTop: 5,
              }}
            >
              <Image
                source={icons.addressIcon}
                contentFit="cover"
                style={{ width: 16, height: 16 }}
              />
              <Text className="text-xl font-semibold text-[#1d3587]  ">
                Haritada Göster
              </Text>
            </Pressable>
          </View>
          <View>
            <View className="mt-4">
              <View className="flex-row items-center gap-2">
                <Image
                  source={icons.phoneIcon}
                  contentFit="cover"
                  style={{ width: 24, height: 24 }}
                />
                <Text className="text-xl">Telefon:</Text>
              </View>
              <Text className="mt-1 text-lg">+902123654789</Text>
            </View>
            <View className="mt-4">
              <View className="flex-row items-center gap-2">
                <Image
                  source={icons.mailIcon}
                  contentFit="cover"
                  style={{ width: 24, height: 24 }}
                />
                <Text className="text-xl">E-posta:</Text>
              </View>
              <Text className="mt-1 text-lg">
                contact@amerikanhastanesi.org
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  dropdown: {
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "white",
    borderColor: "gray",
    paddingHorizontal: 10,
    width: 250,
    fontSize: 14,
  },
});

export default ContactInfo;
