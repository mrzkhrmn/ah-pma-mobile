import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import { Image } from "expo-image";
import icons from "@/constants/icons";
import images from "@/constants/images";
import LargeInfoIcon from "@/constants/LargeInfoIcon";
import QuestionsIcon from "@/constants/QuestionsIcon";
import TestsIcon from "@/constants/TestsIcon";
import PapersIcon from "@/constants/PapersIcon";
import WorldIcon from "@/constants/WorldIcon";
import HomeIcon from "@/constants/HomeIcon";
import TransferIcon from "@/constants/TransferIcon";
import ImportantIcon from "@/constants/ImportantIcon";
import { ScrollView } from "react-native-gesture-handler";
import ContactIcon from "@/constants/ContactIcon";
import PaymentIcon from "@/constants/PaymentIcon";
import { router } from "expo-router";

interface SelectedOperationProps {
  offerId: number;
  operationId: number;
  newOperations: Array<string>;
  date: { startDate: string; endDate: string };
}

const OperationDetail = ({
  selectedOperation,
  setSelectedOperation,
}: {
  selectedOperation: SelectedOperationProps;
  setSelectedOperation: any;
}) => {
  return (
    <ScrollView>
      <View className="justify-center">
        <View className="absolute left-6   p-3">
          <Pressable className="p-4" onPress={() => setSelectedOperation(null)}>
            <Image source={icons.backIcon} style={{ width: 18, height: 18 }} />
          </Pressable>
        </View>
        <View className="items-center justify-center">
          <Image source={images.logoImage} style={{ width: 95, height: 50 }} />
        </View>
      </View>
      <View className="px-4">
        <View className="flex-row justify-between items-center my-4">
          <Text>
            <Text className="font-inter-semibold">Teklif ID: </Text>
            <Text>{selectedOperation.offerId}</Text>
          </Text>
          <Text>
            <Text className="font-inter-semibold">Tarih: </Text>
            <Text>
              {moment(selectedOperation.date.startDate).format("MMMM Do YYYY")}
            </Text>
          </Text>
        </View>
        <Text className="mb-2">
          <Text className="font-inter-semibold">Operasyon ID: </Text>
          <Text>{selectedOperation.operationId}</Text>
        </Text>
        {selectedOperation.newOperations.map((operation: string, i: number) => (
          <Text key={i}>{operation}</Text>
        ))}
        <View className="px-6">
          <Pressable
            className="bg-white py-2 mt-4 rounded-lg flex-row items-center justify-center gap-1"
            onPress={() =>
              router.push({
                pathname: "/operations-detail/general-info",
                params: { operation: JSON.stringify(selectedOperation) },
              })
            }
          >
            <LargeInfoIcon />
            <Text className=" text-xl text-[#1d3587]">Genel Bilgiler</Text>
          </Pressable>
          <View className="flex-row items-center justify-center gap-4">
            <Pressable className="bg-white py-2 mt-4 items-center justify-center rounded-lg w-[120px] h-[100px] px-4 ">
              <QuestionsIcon />
              <Text className="text-center text-xl text-[#1d3587] mt-2">
                Sorular
              </Text>
              <Text className="text-center text-sm  text-yellow-600">
                Cevap Bekleniyor
              </Text>
            </Pressable>
            <Pressable
              className="bg-white py-2 mt-4 items-center justify-center rounded-lg w-[120px] h-[100px] px-4"
              onPress={() => router.push("/operations-detail/tests")}
            >
              <TestsIcon />
              <Text className="text-center text-xl text-[#1d3587] mt-2">
                Testler
              </Text>
              <Text className="text-center text-sm  text-yellow-600">
                Belge Bekleniyor
              </Text>
            </Pressable>
          </View>
          <View className="flex-row items-center justify-center  gap-4">
            <Pressable className="bg-white py-2 mt-4 items-center justify-center rounded-lg w-[120px] h-[100px] px-4">
              <PapersIcon />
              <Text className="text-center text-xl text-[#1d3587] mt-2">
                Evraklar
              </Text>
              <Text className="text-center text-sm  text-red-700">
                Reddedildi
              </Text>
            </Pressable>
            <Pressable className="bg-white py-2 mt-4 rounded-lg items-center justify-center w-[120px] h-[100px] px-4">
              <WorldIcon />
              <Text className="text-center text-xl text-[#1d3587] mt-2">
                Uçuş Detay
              </Text>
              <Text className="text-center text-sm  text-green-800">
                Onaylandı
              </Text>
            </Pressable>
          </View>
          <Pressable className="bg-white flex-row items-center justify-center  gap-1 py-2 mt-4 rounded-lg">
            <HomeIcon />
            <Text className="text-center text-xl text-[#1d3587]">
              Konaklama
            </Text>
          </Pressable>
          <Pressable className="bg-white flex-row items-center justify-center gap-1 py-2 mt-4 rounded-lg">
            <TransferIcon />
            <Text className="text-center text-xl text-[#1d3587]">Transfer</Text>
          </Pressable>
          <Pressable className="bg-white flex-row items-center justify-center  gap-1 py-2 mt-4 rounded-lg">
            <ImportantIcon />
            <Text className="text-center text-xl text-[#1d3587]">
              Önemli Konular
            </Text>
          </Pressable>
          <View className="flex-row items-center justify-center gap-4">
            <Pressable className="bg-white flex-row  items-center justify-center  gap-1 py-2 mt-4 rounded-lg w-[120px] h-[100px] px-4">
              <ContactIcon />
              <Text className="text-center text-xl text-[#1d3587]">
                İletişim
              </Text>
            </Pressable>
            <Pressable className="bg-white py-2 items-center justify-center mt-4 rounded-lg w-[120px] h-[100px] px-4">
              <PaymentIcon />
              <Text className="text-center text-xl text-[#1d3587]">
                Ödemeler
              </Text>
              <Text className="text-center text-sm  text-yellow-600">
                Belge Bekleniyor
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OperationDetail;

const styles = StyleSheet.create({});
