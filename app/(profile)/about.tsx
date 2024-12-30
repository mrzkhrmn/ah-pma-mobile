import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { Image } from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";
import icons from "@/constants/icons";
import { router } from "expo-router";

const About = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName="items-center " className=" px-2 ">
        <View className="absolute left-6  top-8 p-3">
          <Pressable className="p-4" onPress={() => router.back()}>
            <Image source={icons.backIcon} />
          </Pressable>
        </View>
        <Image source={images.logoImage} />
        <Text className="text-2xl text-center font-semibold">Hakkımızda</Text>
        <Text className="text-xl leading-6 mt-4">
          {" "}
          Amerikan Hastanesi bir asrı geride bırakırken, tecrübelerini en güncel
          teknolojik ve bilimsel yaklaşımlarla birleştirerek, sağlık alanındaki
          beklentilere yanıt vermeye devam ediyor.
        </Text>
        <Image source={images.aboutImage} className="my-6" />
        <Text className="text-xl leading-6 ">
          Vehbi Koç Vakfı çatısı altında yer alan Amerikan Hastanesi, 100 yıllık
          bilgi birikimi ve tecrübesiyle en güncel teknolojileri bir araya
          getirerek, kalite odaklı sağlık hizmetleri sunuyor.
        </Text>
        <Text className="text-xl leading-6 mt-4 ">
          Vehbi Koç Vakfı çatısı altında yer alan Amerikan Hastanesi, 100 yıllık
          bilgi birikimi ve tecrübesiyle en güncel teknolojileri bir araya
          getirerek, kalite odaklı sağlık hizmetleri sunuyor.
        </Text>
        <Text className="text-xl leading-6 mt-4 ">
          Bu doğrultuda hastalarımıza uluslararası standartlarda ve kalitede
          tıbbi bakım sunabilmek amacıyla “Sürekli Kalite Geliştirme
          Programları” uyguluyoruz. Hastanemizin Türkiye’de Joint Commission
          International (JCI), ISO 9001: Kalite Belgesi, ISO 14001: Çevre
          Yönetim Sistemi ve ISO 27001: Bilgi Güvenliği Yönetim Sistemi
          belgelerinin dördüne birden sahip olan ilk özel hastane olmasının
          gururunu ve sorumluluğunu taşıyoruz. Amerikan Hastanesi, 2002 yılında
          aldığı JCI Akreditasyon Belgesi ile “akredite edilmiş hastane”
          ünvanını koruyor ve yenilemek üzere belirli aralıklarla denetimden
          geçiyor. 
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
