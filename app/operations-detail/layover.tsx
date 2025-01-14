import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import { Image } from "expo-image";
import images from "@/constants/images";
import Stars from "@/components/operations/Stars";
import { ScrollView } from "react-native-gesture-handler";

const Layover = () => {
  const [selectedTab, setSelectedTab] = useState("hakkinda");
  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <ScrollView>
        <Text className="uppercase text-xl font-inter-semibold text-center my-4">
          Konaklama
        </Text>
        <View className="px-2">
          <Text className="text-lg font-inter-semibold">
            Otel / Konaklama Seçenekleri:
          </Text>
          <View className="bg-white mt-4 rounded-lg border border-gray-300 overflow-hidden">
            <View className="flex-row items-center gap-2">
              <Image
                source={images.roomImage}
                contentFit="cover"
                style={{ width: 145, height: 120 }}
              />
              <View>
                <Text className="font-inter-bold text-md">
                  Park Dedeman Bostancı {"\n"} Hotel
                </Text>
                <View className="flex-row items-center gap-2 mt-1">
                  <Stars />
                  <Text>Otel</Text>
                </View>
                <Text className="text-xs">Şehir merkezi 12.7 km uzaklıkta</Text>
                <Text className="text-sm mt-2">
                  <Text className="font-inter-semibold text-md">
                    8.3 - Çok iyi
                  </Text>{" "}
                  (2792)
                </Text>
              </View>
            </View>
            <View className="flex-row items-center pt-4  ">
              <Pressable className="flex-1 items-center border-b border-1 py-1 px-1 ">
                <Text className="font-inter-semibold ">Hakkında</Text>
              </Pressable>
              <Pressable className="flex-1 items-center border-b py-1 px-1 border-gray-300">
                <Text className="font-inter-semibold ">Yorumlar</Text>
              </Pressable>
              <Pressable className="flex-1 items-center border-b py-1 px-1 border-gray-300">
                <Text className="font-inter-semibold ">Fotoğraflar</Text>
              </Pressable>
              <Pressable className="flex-1 items-center border-b py-1 px-1 border-gray-300">
                <Text className="font-inter-semibold ">İletişim</Text>
              </Pressable>
            </View>
            <View className="px-2 py-2">
              <Text style={{ lineHeight: 20 }}>
                At Park Dedeman Bostanci Hotel, exceptional service and
                top-notch amenities create a memorable experience for guests.
                Complimentary internet access is available in the hotel to
                ensure you stay connected during your visit.Arrange your trips
                to and from the airport using the hotel's convenient
                transportation services booking. Complimentary parking is
                available for guests. A delightful breakfast is the perfect way
                to begin your day, and at Park Dedeman Bostanci Hotel, you can
                always indulge in a scrumptious meal on-site. Allow your journey
                to be free from the pangs of hunger! On-site eateries offer
                delicious and accessible meal choices.At Park Dedeman Bostanci
                Hotel, guests can take pleasure in the delightful recreational
                amenities provided for their entertainment. At the hotel fitness
                center, you have the option to engage in your daily exercise
                routine or simply alleviate your jet lag by breaking a sweat.
              </Text>
              <Text className="text-lg font-inter-semibold mt-4">
                Özellikler:
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layover;
