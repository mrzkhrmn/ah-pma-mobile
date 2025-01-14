import { View, Text, Keyboard } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import { useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const FlightDetails = () => {
  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <ScrollView>
        <View className="pb-16">
          <Text className="font-inter-semibold text-xl text-center mt-4 uppercase">
            Uçuş Detayları
          </Text>
          <View className="mt-4 px-4">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Text className="font-inter-semibold text-lg">
                Geliş Detayları:
              </Text>
              <TextInput
                id={``}
                className="mt-3 border border-black/20 w-full py-2 px-2 rounded-lg bg-white placeholder:text-gray-500"
                placeholder="Kalkış Tarihi"
              />
              <TextInput
                id={``}
                className="mt-3 border border-black/20 w-full py-2 px-2 rounded-lg bg-white placeholder:text-gray-500"
                placeholder="Kalkış Yeri"
              />
              <TextInput
                id={``}
                className="mt-3 border border-black/20 w-full py-2 px-2 rounded-lg bg-white placeholder:text-gray-500"
                placeholder="Uçuş Numarası"
              />
              <TextInput
                id={``}
                className="mt-3 border border-black/20 w-full py-2 px-2 rounded-lg bg-white placeholder:text-gray-500"
                placeholder="Havaalanı"
              />
              <TextInput
                id={``}
                className="mt-3 border border-black/20 w-full py-2 px-2 rounded-lg bg-white placeholder:text-gray-500"
                placeholder="Kalkış Saati"
              />
              <TextInput
                id={``}
                className="mt-3 border border-black/20 w-full py-2 px-2 rounded-lg bg-white placeholder:text-gray-500"
                placeholder="Varış Saati"
              />
            </TouchableWithoutFeedback>
          </View>
          <View className="mt-8 px-4">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Text className="font-inter-semibold text-lg">
                Dönüş Detayları:
              </Text>
              <TextInput
                id={``}
                className="mt-3 border border-black/20 w-full py-2 px-2 rounded-lg bg-white placeholder:text-gray-500"
                placeholder="Kalkış Tarihi"
              />
              <TextInput
                id={``}
                className="mt-3 border border-black/20 w-full py-2 px-2 rounded-lg bg-white placeholder:text-gray-500"
                placeholder="Kalkış Yeri"
              />
              <TextInput
                id={``}
                className="mt-3 border border-black/20 w-full py-2 px-2 rounded-lg bg-white placeholder:text-gray-500"
                placeholder="Uçuş Numarası"
              />
              <TextInput
                id={``}
                className="mt-3 border border-black/20 w-full py-2 px-2 rounded-lg bg-white placeholder:text-gray-500"
                placeholder="Havaalanı"
              />
              <TextInput
                id={``}
                className="mt-3 border border-black/20 w-full py-2 px-2 rounded-lg bg-white placeholder:text-gray-500"
                placeholder="Kalkış Saati"
              />
              <TextInput
                id={``}
                className="mt-3 border border-black/20 w-full py-2 px-2 rounded-lg bg-white placeholder:text-gray-500"
                placeholder="Varış Saati"
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FlightDetails;
