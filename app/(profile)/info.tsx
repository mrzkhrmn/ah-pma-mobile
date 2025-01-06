import {
  View,
  Text,
  Pressable,
  Keyboard,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import { Dropdown } from "react-native-element-dropdown";

const Info = () => {
  const [genderDropdownValue, setGenderDropdownValue] = useState(null);
  const [countryDropdownValue, setCountryDropdownValue] = useState(null);

  const genderData = [
    { value: "erkek", label: "Erkek" },
    { value: "kadın", label: "Kadın" },
  ];
  const countryData = [
    { value: "türkiye", label: "Türkiye" },
    { value: "amerika", label: "Amerika" },
  ];

  return (
    <SafeAreaView className="">
      <LogoWithBackButton />
      <View>
        <Text className="text-2xl text-center font-semibold my-4">
          Bilgilerim
        </Text>
        <View className="w-full px-12  gap-4">
          <View className=" flex items-center w-full">
            <Text className="text-start self-start">Ad</Text>
            <TextInput
              id="name"
              className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
            />
          </View>
          <View className=" flex items-center w-full">
            <Text className="text-start self-start">Soyad</Text>
            <TextInput
              id="surname"
              className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
            />
          </View>
          <View className=" flex items-center w-full">
            <Text className="text-start self-start">Telefon</Text>
            <TextInput
              id="phone"
              className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
            />
          </View>
          <View className=" flex items-center w-full">
            <Text className="text-start self-start">E-posta</Text>
            <TextInput
              id="email"
              className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
            />
          </View>
          <View>
            <Dropdown
              style={styles.dropdown}
              inputSearchStyle={styles.dropdown}
              selectedTextStyle={styles.dropdown}
              placeholderStyle={styles.dropdown}
              data={genderData}
              labelField={"label"}
              valueField={"value"}
              placeholder="Cinsiyet"
              value={genderDropdownValue}
              onChange={(item) => {
                setGenderDropdownValue(item.value);
              }}
            />
          </View>
          <View>
            <Dropdown
              style={styles.dropdown}
              inputSearchStyle={styles.dropdown}
              selectedTextStyle={styles.dropdown}
              placeholderStyle={styles.dropdown}
              data={countryData}
              labelField={"label"}
              valueField={"value"}
              placeholder="Country"
              value={countryDropdownValue}
              onChange={(item) => {
                setCountryDropdownValue(item.value);
              }}
            />
          </View>
          <View className=" flex items-center w-full">
            <Text className="text-start self-start">Şehir</Text>
            <TextInput
              id="city"
              className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
            />
          </View>
          <View className=" flex items-center w-full">
            <Text className="text-start self-start">Address</Text>
            <TextInput
              id="address"
              className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
            />
          </View>
          <View className="items-center mt-4">
            <TouchableOpacity
              style={{
                backgroundColor: "#1d3587",
                paddingVertical: 8,
                width: 150,
                borderRadius: 5,
              }}
            >
              <Text className="text-center text-white">
                Değişiklikleri Kaydet
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: "white",
    borderColor: "black",
    borderStyle: "solid",
    paddingHorizontal: 10,
    width: 235,
    fontSize: 14,
  },
});

export default Info;
