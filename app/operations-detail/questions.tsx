import { View, Text, Keyboard } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import { useLocalSearchParams } from "expo-router";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const Questions = () => {
  const { operation } = useLocalSearchParams();

  const { newOperations } = operation ? JSON.parse(operation as string) : null;
  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <Text className="font-inter-semibold text-xl text-center mt-4">
        SORULAR
      </Text>
      <View className=" px-4">
        {newOperations.map((operation: string, index: number) => (
          <View className="mt-6" key={index}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View className="flex-row items-center gap-1">
                <Text className="font-inter-semibold">Operasyon:</Text>
                <Text>{operation}</Text>
              </View>
              <View>
                <Text className="font-inter-semibold mt-2">Soru</Text>
                <Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam eligendi consequuntur molestias magni laboriosam
                  quisquam saepe totam, rerum itaque. Atque minus eos
                  consectetur commodi nisi quod sequi praesentium, sapiente
                  exercitationem!
                </Text>
              </View>
              <TextInput
                id={`answer${index}`}
                className="mt-6 border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white placeholder:text-gray-500"
                placeholder="Cevap"
              />
            </TouchableWithoutFeedback>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Questions;
