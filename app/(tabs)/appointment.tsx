import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { Image } from "expo-image";
import { FlatList, Pressable, TextInput } from "react-native-gesture-handler";

const Appointment = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 0,
      offerId: 3553423,
      date: "15 Aralik 2024",
      operationId: 4464645,
      operations: [
        "Deviasyon (Septum Eğriliği) Ameliyatı",
        "Revizyon Burun Cerrahisi",
      ],
      relatedPerson: "Ahmet Örnekadam",
      operationDate: "17 Ocak 2025 - 17:00 CET",
    },
    {
      id: 1,
      offerId: 3553423,
      date: "15 Aralik 2024",
      operationId: 4464645,
      operations: [
        "Deviasyon (Septum Eğriliği) Ameliyatı",
        "Revizyon Burun Cerrahisi",
      ],
      relatedPerson: "Ahmet Örnekadam",
      operationDate: "17 Ocak 2025 - 17:00 CET",
    },
    {
      id: 2,
      offerId: 3553423,
      date: "15 Aralik 2024",
      operationId: 4464645,
      operations: [
        "Deviasyon (Septum Eğriliği) Ameliyatı",
        "Revizyon Burun Cerrahisi",
      ],
      relatedPerson: "Ahmet Örnekadam",
      operationDate: "17 Ocak 2025 - 17:00 CET",
    },
    {
      id: 3,
      offerId: 3553423,
      date: "15 Aralik 2024",
      operationId: 4464645,
      operations: [
        "Deviasyon (Septum Eğriliği) Ameliyatı",
        "Revizyon Burun Cerrahisi",
      ],
      relatedPerson: "Ahmet Örnekadam",
      operationDate: "17 Ocak 2025 - 17:00 CET",
    },
    {
      id: 4,
      offerId: 3553423,
      date: "15 Aralik 2024",
      operationId: 4464645,
      operations: [
        "Deviasyon (Septum Eğriliği) Ameliyatı",
        "Revizyon Burun Cerrahisi",
      ],
      relatedPerson: "Ahmet Örnekadam",
      operationDate: "17 Ocak 2025 - 17:00 CET",
    },
    {
      id: 5,
      offerId: 3553423,
      date: "15 Aralik 2024",
      operationId: 4464645,
      operations: [
        "Deviasyon (Septum Eğriliği) Ameliyatı",
        "Revizyon Burun Cerrahisi",
      ],
      relatedPerson: "Ahmet Örnekadam",
      operationDate: "17 Ocak 2025 - 17:00 CET",
    },
  ]);
  return (
    <SafeAreaView>
      <View className="items-center">
        <Image source={images.logoImage} style={{ width: 98, height: 50 }} />
      </View>
      {false ? (
        <Text>
          Randevu talebi oluşturabilmek için teklif talebinde bulunmanız
          gerekmektedir
        </Text>
      ) : (
        <View className="pb-24">
          <FlatList
            data={appointments}
            contentContainerStyle={{ gap: 20 }}
            renderItem={({ item }) => (
              <View className=" px-4">
                <View className="bg-white px-2 py-3 rounded-lg">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                      <Text className="font-inter-semibold">Teklif ID:</Text>
                      <Text>{item.offerId}</Text>
                    </View>
                    <View className="flex-row items-center ">
                      <Text className="font-inter-semibold">Tarih:</Text>
                      <Text>{item.date}</Text>
                    </View>
                  </View>
                  <Text className="mt-2">
                    <Text className="font-inter-semibold mt-1">
                      Operation ID:
                    </Text>
                    {item.operationId}
                  </Text>
                  {item.operations.map((opr, index) => (
                    <Text className="mt-1" key={index}>
                      {opr}
                    </Text>
                  ))}
                  <Text className="mt-2">
                    <Text className="font-inter-semibold">İlgili Kişi:</Text>
                    {item.relatedPerson}
                  </Text>
                  <View className="mt-2">
                    <Text className="font-inter-semibold">
                      Operasyon Tarihi:
                    </Text>
                    <Text>{item.operationDate}</Text>
                  </View>
                  <View className=" flex items-center w-full mt-2 gap-1">
                    <Text className="text-start self-start">
                      Talep Edilen Randevu Tarihi
                    </Text>
                    <TextInput className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white" />
                  </View>
                  <View className="items-center mt-3">
                    <Pressable
                      style={{
                        backgroundColor: "#1d3587",
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderRadius: 5,
                      }}
                    >
                      <Text className="text-white font-inter-semibold">
                        Randevu Talep Et
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Appointment;
