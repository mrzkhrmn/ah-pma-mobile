import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import images from "@/constants/images";
import {
  FlatList,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";
import icons from "@/constants/icons";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import Checkbox from "expo-checkbox";
import { Toast } from "toastify-react-native";
import { DatePickerModal } from "react-native-paper-dates";

const OfferItem = ({ source }: { source: string }) => {
  return (
    <View
      style={[
        {
          width: 130,
          height: 127,
          overflow: "hidden",
          borderRadius: 8,
        },
      ]}
    >
      <Image
        source={images.noseOfferImage}
        style={{ width: 255, height: 140, objectFit: "cover" }}
      />
    </View>
  );
};

const Offers = () => {
  const [offerData, setOfferData] = useState([
    {
      id: 1,
      source: images.noseOfferImage,
    },
    {
      id: 2,
      source: images.noseOfferImage,
    },
    {
      id: 3,
      source: images.noseOfferImage,
    },
  ]);
  const [checked, setChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dropDownValue, setDropDownValue] = useState(null);
  const hospitalDropdownData = [
    { value: "Burun Estetiği", label: "Burun Estetiği" },
    { value: "Kaş Estetiği", label: "Kaş Estetiği" },
  ];

  const [image, setImage] = useState<string | null>(null);
  const [range, setRange] = React.useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [open, setOpen] = React.useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
    },
    [setOpen, setRange]
  );

  const showToasts = () => {
    Toast.success("Promised is resolved");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="items-center">
          <Image source={images.logoImage} style={{ width: 95, height: 50 }} />
        </View>
        <Text className="font-inter-medium text-xl text-center mt-4">
          TEKLİF İSTE
        </Text>
        <View className="mx-auto mt-4">
          <Dropdown
            style={styles.dropdown}
            inputSearchStyle={styles.dropdown}
            selectedTextStyle={styles.dropdown}
            placeholderStyle={styles.dropdown}
            data={hospitalDropdownData}
            labelField={"label"}
            valueField={"value"}
            placeholder="Operason Seçimi"
            value={dropDownValue}
            onChange={(item) => {
              setDropDownValue(item.value);
            }}
          />
        </View>
        <View className="px-10 mt-6">
          <Text className="font-inter-medium">Soru 1</Text>
          <Text className="font-inter-medium ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Text>
        </View>
        <View className=" flex items-center w-full px-10 mt-4">
          <Text className="text-start self-start font-inter-medium">
            Cevap 1
          </Text>
          <TextInput className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white" />
        </View>
        <View className="items-center mt-6">
          <Pressable>
            <Text className="text-white bg-[#1d3587] px-6 py-3 font-inter-semibold rounded-lg">
              + Operasyon Ekle
            </Text>
          </Pressable>
        </View>
        <View className="items-start px-4 mt-8">
          <Pressable
            onPress={pickImage}
            style={{
              backgroundColor: "#1d3587",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 8,
              gap: 10,
              borderRadius: 6,
            }}
          >
            <Image
              source={icons.galleryAddIcon}
              style={{ width: 42, height: 42 }}
            />
            <Text className=" text-white font-inter-semibold text-center">
              Fotoğraf {"\n"} Ekle
            </Text>
          </Pressable>
        </View>
        <View className="px-4 mt-8">
          <FlatList
            contentContainerStyle={{ gap: 10 }}
            data={offerData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(data) => (
              <OfferItem key={data.id} source={data.source} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View className="flex flex-row px-4 gap-2 my-6">
          <Checkbox
            onTouchStart={() => setChecked(!checked)}
            style={{ borderWidth: 1, borderRadius: 7 }}
            color={"#00000053"}
            className="rounded-lg border overflow-hidden"
            value={checked}
          />
          <Text className="text-[14px] pr-6">
            Teklif talep ederek{" "}
            <Text className="text-[#1d3587]">
              özel nitelikli kişisel veri açık rıza metnini
            </Text>{" "}
            ve okuyup onayladığımı kabul ederim.
          </Text>
        </View>

        <View className="px-4">
          <Text className="text-lg font-inter-medium">Ek Talepler</Text>
          <View className="flex flex-row gap-4 justify-center">
            <View className="flex flex-row items-center gap-1 my-6">
              <Checkbox
                onTouchStart={() => setChecked(!checked)}
                style={{
                  borderWidth: 1,
                  borderRadius: 7,
                  width: 20,
                  height: 20,
                }}
                color={"#00000053"}
                className="rounded-lg border overflow-hidden"
                value={checked}
              />
              <Text className="text-[16px] ">Transfer</Text>
            </View>
            <View className="flex flex-row items-center gap-1   my-6">
              <Checkbox
                onTouchStart={() => setChecked(!checked)}
                style={{
                  borderWidth: 1,
                  borderRadius: 7,
                  width: 20,
                  height: 20,
                }}
                color={"#00000053"}
                className="rounded-lg border overflow-hidden"
                value={checked}
              />
              <Text className="text-[16px] ">Konaklama</Text>
            </View>
            <View className="flex flex-row gap-1 items-center my-6">
              <Checkbox
                onTouchStart={() => setChecked(!checked)}
                style={{
                  borderWidth: 1,
                  borderRadius: 7,
                  width: 20,
                  height: 20,
                }}
                color={"#00000053"}
                className="rounded-lg border overflow-hidden"
                value={checked}
              />
              <Text className="text-[16px] ">Refakatçi</Text>
            </View>
          </View>
        </View>
        <View className=" flex items-center w-full px-10 mt-4">
          <DatePickerModal
            locale="en"
            mode="range"
            visible={open}
            onDismiss={onDismiss}
            startDate={range.startDate}
            endDate={range.endDate}
            onConfirm={onConfirm}
          />
          <TouchableOpacity
            className="bg-white px-4 py-2 rounded-lg"
            onPress={() => setOpen(true)}
          >
            <Text className="text-start self-start font-inter-medium">
              Tarih Aralığı Seçiniz
            </Text>
          </TouchableOpacity>
        </View>
        <View className="items-center my-6">
          <Pressable onPress={showToasts}>
            <Text className="text-white bg-[#1d3587] px-6 py-3 font-inter-semibold rounded-lg">
              + Operasyon Ekle
            </Text>
          </Pressable>
        </View>
      </ScrollView>
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

export default Offers;
