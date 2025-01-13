import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import images from "@/constants/images";
import OngoingOperations from "@/components/operations/OngoingOperations";
import CompletedOperations from "@/components/operations/CompletedOperations";
import OperationDetail from "@/components/operations/OperationDetail";

const Operations = () => {
  const [ongoingOperations, setOngoingOperations] = useState(true);
  const [selectedOperation, setSelectedOperation] = useState(null);
  return (
    <SafeAreaView>
      {selectedOperation ? (
        <OperationDetail
          selectedOperation={selectedOperation}
          setSelectedOperation={setSelectedOperation}
        />
      ) : (
        <>
          <View className="items-center">
            <Image
              source={images.logoImage}
              style={{ width: 98, height: 50 }}
            />
          </View>
          <View className="px-4 flex-row items-center justify-between my-4">
            <Pressable
              onPress={() => setOngoingOperations(true)}
              className={`px-6 py-2 rounded-lg ${
                ongoingOperations
                  ? "bg-[#1d3587] border border-[#1d3587]"
                  : "bg-white border border-[#1d3587]"
              }`}
            >
              <Text
                className={`font-inter-semibold ${
                  ongoingOperations ? "text-white" : "text-[#1d3587]"
                }`}
              >
                Devam Edenler
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setOngoingOperations(false)}
              className={`px-6 py-2 rounded-lg ${
                !ongoingOperations
                  ? "bg-[#1d3587] border border-[#1d3587] "
                  : "bg-white border border-[#1d3587] "
              }`}
            >
              <Text
                className={`font-inter-semibold ${
                  !ongoingOperations ? "text-white" : "text-[#1d3587]"
                }`}
              >
                Tamamlananlar
              </Text>
            </Pressable>
          </View>
          {ongoingOperations ? (
            <OngoingOperations setSelectedOperation={setSelectedOperation} />
          ) : (
            <CompletedOperations setSelectedOperation={setSelectedOperation} />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default Operations;
