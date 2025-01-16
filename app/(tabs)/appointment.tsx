import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { Image } from "expo-image";

const Appointment = () => {
  return (
    <SafeAreaView>
      <View className="items-center">
        <Image source={images.logoImage} style={{ width: 98, height: 50 }} />
      </View>
      {true ? (
        <Text>
          Randevu talebi oluşturabilmek için teklif talebinde bulunmanız
          gerekmektedir
        </Text>
      ) : (
        <Text>Randevular</Text>
      )}
    </SafeAreaView>
  );
};

export default Appointment;
