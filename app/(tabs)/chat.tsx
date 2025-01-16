import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import images from "@/constants/images";
import InChatIcon from "@/constants/InChatIcon";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import icons from "@/constants/icons";
import ShareIcon from "@/constants/ShareIcon";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import SendIcon from "@/constants/SendIcon";
import MessageItem from "@/components/MessageItem";

const Chat = () => {
  const [chatInfo, setChatInfo] = useState([
    {
      name: "Fatma Bölük",
      title: "Asistan",
      content: "Perşembe günü olabilir ya da lorem ipsum dolor",
    },
    {
      name: "İlhan Sözen",
      title: "Şoför",
      content: "",
    },
  ]);
  const [messageInfo, setMessageInfo] = useState([
    {
      from: "Fatma Bölük",
      content:
        "I had a smile with 24 veneers. Four days later Dr Ebru prepared my teeth and she put the veneers on. Now it looks amazing, I have a beautiful smile to go with my new look.",
      date: "04.03.2021 - 15:00",
    },
    {
      from: "me",
      content:
        "I had a smile with 24 veneers. Four days later Dr Ebru prepared my teeth and she put the veneers on. Now it looks amazing, I have a beautiful smile to go with my new look.",
      date: "04.03.2021 - 15:00",
    },
    {
      from: "Fatma Bölük",
      content:
        "I had a smile with 24 veneers. Four days later Dr Ebru prepared my teeth and she put the veneers on. Now it looks amazing, I have a beautiful smile to go with my new look.",
      date: "04.03.2021 - 15:00",
    },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  return selectedChat === null ? (
    <SafeAreaView>
      <View className="items-center">
        <Image source={images.logoImage} style={{ width: 98, height: 50 }} />
      </View>
      <Text className="text-xl font-inter-semibold text-center my-4">
        İLETİŞİM
      </Text>
      <View className="px-4">
        <View className="bg-white border border-gray-300 px-2 py-2 rounded-lg">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg">
              <Text className="font-inter-semibold">Teklif ID: </Text>3633392
            </Text>
            <Text className="text-lg">
              <Text className="font-inter-semibold">Tarih: </Text>15 Aralık 2024
            </Text>
          </View>
          <Text className="text-lg my-2">
            <Text className="font-inter-semibold">Operasyon ID:</Text> 4677412
          </Text>
          <Text className="text-lg mb-2" style={{ lineHeight: 20 }}>
            Deviasyon (Septum Eğriliği) Ameliyatı, Revizyon Burun Cerrahisi.
          </Text>
          {chatInfo.map((info: any, index) => (
            <Pressable onPress={() => setSelectedChat(info)} key={index}>
              <View className="w-full h-0.5 border border-gray-200"></View>
              <View className="flex-row items-center py-4">
                <Image
                  style={{ width: 48, height: 48 }}
                  source={images.driverImage}
                  contentFit="cover"
                />
                <View className="pl-2 flex flex-1 justify-center">
                  <Text className="font-inter-semibold justify-self-center ">
                    {info.name} - {info.title}
                  </Text>
                  <Text className=" ">{info.content}</Text>
                </View>
                <View className="gap-2 px-1">
                  <InChatIcon />
                  <Text>15:17</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView className="border flex-1 flex-col">
      <View className="justify-center">
        <View className="absolute left-6   p-3">
          <Pressable className="p-4" onPress={() => setSelectedChat(null)}>
            <Image source={icons.backIcon} style={{ width: 18, height: 18 }} />
          </Pressable>
        </View>
        <View className="items-center">
          <Image source={images.logoImage} style={{ width: 95, height: 50 }} />
        </View>
      </View>
      <View className="px-4 mt-4">
        <View className="flex-row items-center gap-2">
          <Image
            style={{ width: 62, height: 62 }}
            source={images.driverImage}
            contentFit="cover"
          />
          <Text className="font-inter-semibold text-lg">
            {selectedChat.name} - {selectedChat.title}
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={120}
        >
          <View className="h-full ">
            <ScrollView>
              {messageInfo.map((message, key) => (
                <MessageItem key={key} message={message} />
              ))}
              <View className="px-4 flex-row gap-2 pb-48  mt-4">
                <Pressable>
                  <ShareIcon />
                </Pressable>
                <View className="flex-row items-center flex-1">
                  <TextInput
                    placeholder="Mesajınızı giriniz..."
                    className="bg-white placeholder:text-gray-400 flex-1 px-4 py-4 "
                  />
                  <Pressable className="bg-[#1d3587] py-2 px-2 rounded-r-lg">
                    <SendIcon />
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
