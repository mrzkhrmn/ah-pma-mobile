import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FlatList, Pressable } from "react-native-gesture-handler";
import HomeCard from "@/components/HomeCard";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoWithBackButton from "@/components/LogoWithBackButton";

const Saves = () => {
  const { savedOperations } = useSelector((state: any) => state.auth);
  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <Text className="text-2xl text-center font-semibold my-4">
        Kaydettiklerim
      </Text>
      {savedOperations === null || savedOperations?.length === 0 ? (
        <Text className="text-lg text-center mt-10">
          Kaydedilmiş bir operasyonunuz yok.
        </Text>
      ) : (
        <>
          <View className="px-5 pb-64">
            <FlatList
              data={savedOperations}
              renderItem={({ item }) => <HomeCard item={item} />}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Saves;
