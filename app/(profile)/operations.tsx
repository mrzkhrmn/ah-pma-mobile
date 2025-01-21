import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image } from "expo-image";

const Operations = () => {
  const [selectedOperation, setSelectedOperation] = useState<any>(null);
  const [selectedOperationDetail, setSelectedOperationDetail] = useState(1);
  const operationsData = [
    {
      id: 1,
      name: "Saç Ekimi",
      image: images.operationImage,
    },
    {
      id: 2,
      name: "Saç Ekimi",
      image: images.operationImage,
    },
    {
      id: 3,
      name: "Saç Ekimi",
      image: images.operationImage,
    },
  ];

  const operationDetails = [
    {
      id: 1,
      title: "FUE Saç Ekimi Tekniği Nedir?",
      content:
        "FUE (Foliküler Ünite Ekstraksiyonu) saç ekimi, saç köklerinintek tek alınarak saçsız bölgelere nakledildiği saç ekimitekniğidir. Bu yöntemde, saç donör bölgeden mikrocerrahialetlerle alınır ve sonra saçsız bölgelere ekilir.",
    },
    {
      id: 2,
      title: "FUE Saç Ekimi Tekniği Nedir?",
      content:
        "FViewUE (Foliküler Ünite Ekstraksiyonu) saç ekimi, saç köklerinintek tek alınarak saçsız bölgelere nakledildiği saç ekimitekniğidir. Bu yöntemde, saç donör bölgeden mikrocerrahialetlerle alınır ve sonra saçsız bölgelere ekilir.",
    },
    {
      id: 3,
      title: "FUE Saç Ekimi Tekniği Nedir?",
      content:
        "FUE (Foliküler Ünite Ekstraksiyonu) saç ekimi, saç köklerinintek tek alınarak saçsız bölgelere nakledildiği saç ekimitekniğidir. Bu yöntemde, saç donör bölgeden mikrocerrahialetlerle alınır ve sonra saçsız bölgelere ekilir.",
    },
  ];

  const handlePressOperationDetail = (id : number) => {
    if (selectedOperationDetail === id) {
      return setSelectedOperationDetail(0);
    }

    setSelectedOperationDetail(id);
  };

  const handleGoBack = () => {
    if (selectedOperation === null) {
      router.back();
    } else {
      setSelectedOperation(null);
    }
  };

  return (
    <SafeAreaView className=" ">
      {selectedOperation === null ? (
        <>
          <View className="justify-center ">
            <View className="absolute left-6   p-3">
              <Pressable className="p-4" onPress={handleGoBack}>
                <Image
                  source={icons.backIcon}
                  contentFit="cover"
                  style={{ width: 18, height: 18 }}
                />
              </Pressable>
            </View>
            <View className="items-center">
              <Image
                source={images.logoImage}
                style={{ width: 95, height: 50 }}
              />
            </View>
          </View>
          <Text className="text-2xl text-center font-semibold my-4">
            Operasyonlar
          </Text>
          <View className="max-w-[340px] items-center ml-[18px]  flex flex-row flex-wrap mx-auto gap-2">
            {operationsData.map((operation) => (
              <View key={operation.id} className="">
                <Image
                  source={operation.image}
                  contentFit="cover"
                  style={{ width: 140, height: 154 }}
                />
                <Pressable onPress={() => setSelectedOperation(operation)}>
                  <View className="bg-[#1d3587] gap-2 py-4  px-2">
                    <Text className="text-white font-semibold text-center">
                      {operation.name}
                    </Text>
                  </View>
                </Pressable>
              </View>
            ))}
          </View>
        </>
      ) : (
        <>
          <View className="justify-center ">
            <View className="absolute left-6   p-3">
              <Pressable className="p-4" onPress={handleGoBack}>
                <Image
                  source={icons.backIcon}
                  contentFit="cover"
                  style={{ width: 18, height: 18 }}
                />
              </Pressable>
            </View>
            <View className="items-center">
              <Image
                source={images.logoImage}
                style={{ width: 95, height: 50 }}
              />
            </View>
          </View>
          <Text className="text-2xl text-center font-semibold my-6">
            Operasyonlar
          </Text>
          <View className=" w-full px-6">
            <View className="bg-white">
              <View className="flex flex-row items-center gap-6">
                <Image
                  source={selectedOperation.image}
                  style={{ width: 150, height: 152 }}
                  contentFit="cover"
                />
                <Text className="text-lg font-semibold">Fue Saç Ekimi</Text>
              </View>
              {operationDetails.map((operationDetail) => (
                <Pressable
                  onPress={() => handlePressOperationDetail(operationDetail.id)}
                  key={operationDetail.id}
                  className="px-4 mt-4"
                >
                  <View className="flex flex-row justify-between">
                    <Text className="text-[18px] text-xl">
                      {operationDetail.title}
                    </Text>
                    <View className=" flex-1 justify-center items-end">
                      <Text className="text-xl">
                        {selectedOperationDetail === operationDetail.id
                          ? "-"
                          : "+"}
                      </Text>
                    </View>
                  </View>
                  <Text className="h-[1px] bg-black/10 w-full mt-2"></Text>
                  {selectedOperationDetail === operationDetail.id && (
                    <Text className="leading-6 py-2">
                      {operationDetail.content}
                    </Text>
                  )}
                </Pressable>
              ))}
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Operations;
