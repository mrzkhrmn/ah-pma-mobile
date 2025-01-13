import { View, Text, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { Image } from "expo-image";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";

const OfferDetail = ({
  selectedOffer,
  setSelectedOffer,
}: {
  selectedOffer: any;
  setSelectedOffer: any;
}) => {
  console.log(selectedOffer);
  return (
    <SafeAreaView>
      <View className="justify-center">
        <View className="absolute left-6   p-3">
          <Pressable className="p-4" onPress={() => setSelectedOffer(null)}>
            <Image source={icons.backIcon} style={{ width: 18, height: 18 }} />
          </Pressable>
        </View>
        <View className="items-center">
          <Image source={images.logoImage} style={{ width: 98, height: 50 }} />
        </View>
      </View>
      <View className="pb-48">
        <ScrollView>
          <View className="flex flex-row items-center justify-center  gap-8 mt-4">
            <Text className="text-lg">
              <Text className="font-inter-semibold">Teklif ID:</Text>
              {selectedOffer?.id}
            </Text>
            <Text className="text-lg">
              <Text className="font-inter-semibold">Tarih:</Text>
              {moment(selectedOffer.date.startDate).format("MMMM Do YYYY")}
            </Text>
          </View>
          <View className="mt-4 px-3 w-full">
            <Text className="text-lg font-inter-semibold mb-1">Operasyon:</Text>
            {selectedOffer.newOperations.map(
              (operation: string, index: number) => (
                <Text key={index}>{operation},</Text>
              )
            )}
          </View>

          <View className="mt-4 px-3 w-full">
            <Text className="text-lg font-inter-semibold mb-1">
              Operasyon Maliyeti:
            </Text>
            <Text className="text-lg">83.000₺</Text>
          </View>

          <View className="mt-4 px-3">
            <Text className="text-lg font-inter-semibold mb-1">
              Operasyonu Gerçekleştirecek Doktor:
            </Text>
            <View className="mt-2 flex-row items-center gap-2">
              <Image
                source={images.doctorProile}
                style={{ width: 60, height: 60, borderRadius: 100 }}
              />
              <View>
                <Text className="font-inter-semibold">
                  Prof. Dr. Erman Toroğlu
                </Text>
                <Text>Plastik Cerrah</Text>
              </View>
            </View>
            <View className="mt-4">
              <Text className="font-inter-semibold text-lg">
                Operasyon Tarihi:
              </Text>
              <Text className="mt-1 ">
                {moment(selectedOffer.date.endDate).format("MMMM Do YYYY")}
              </Text>
            </View>
            <View className="mt-4">
              <Text className="font-inter-semibold text-lg">Yatış Süresi:</Text>
              <Text className="mt-1 ">3 Gün</Text>
            </View>
            <View className="mt-4">
              <Text className="font-inter-semibold text-lg">Hastane:</Text>
              <Text className="mt-1 ">Özel Acıbadem</Text>
            </View>
            <View className="mt-4">
              <Text className="font-inter-semibold text-lg">
                Operasyon Detayları:
              </Text>
              <Text className="mt-1 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </Text>
            </View>
            <View className="mt-4">
              <Text className="font-inter-semibold text-lg">
                Operasyon Öncesi Talep Edilenler:
              </Text>
              <Text className="mt-1 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </Text>
            </View>
            <View className="mt-4">
              <Text className="font-inter-semibold text-lg">
                Transfer Seçenekleri:
              </Text>
              <View className="flex-row items-center justify-center mt-2 gap-4">
                <Pressable className="bg-[#1d3587] py-3 px-6 rounded-lg">
                  <Text className="text-white font-inter-semibold">
                    Sürekli Teklifler
                  </Text>
                </Pressable>
                <Pressable className="bg-white py-3 px-6 rounded-lg">
                  <Text className="text-[#1d3587] font-inter-semibold ">
                    Sadece Havaalanı
                  </Text>
                </Pressable>
              </View>
              <Text className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </Text>
              <View className="mt-4">
                <Text className="font-inter-semibold text-lg">
                  Toplam Maliyet:120.000₺:
                </Text>
                <Text className="mt-1 ">Ön Ödeme Miktarı: 12.000₺</Text>
              </View>
              <View className="flex-row items-center justify-center mt-6 gap-4">
                <Pressable className="bg-[#1d3587] py-3 px-6 rounded-lg">
                  <Text className="text-white font-inter-semibold">
                    Teklifi Kabul Et
                  </Text>
                </Pressable>
                <Pressable className="bg-[#1d3587] py-3 px-6 rounded-lg">
                  <Text className="text-white font-inter-semibold ">
                    Soru Sor
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OfferDetail;
