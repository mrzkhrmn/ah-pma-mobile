import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { ScrollView } from "react-native-gesture-handler";
import LogoWithBackButton from "@/components/LogoWithBackButton";
import { Image } from "expo-image";

const About = () => {
  return (
    <SafeAreaView>
      <LogoWithBackButton />
      <View className="pb-32">
        <ScrollView
          contentContainerClassName="items-center "
          className=" px-2 "
        >
          <Text className="text-2xl text-center font-semibold mt-4">
            Hakkımızda
          </Text>
          <Text className="text-xl leading-7 mt-4">
            {" "}
            Amerikan Hastanesi bir asrı geride bırakırken, tecrübelerini en
            güncel teknolojik ve bilimsel yaklaşımlarla birleştirerek, sağlık
            alanındaki beklentilere yanıt vermeye devam ediyor.
          </Text>
          <Image
            source={images.aboutImage}
            contentFit="cover"
            style={{ width: 220, height: 165, marginVertical: 20 }}
          />
          <Text className="text-xl leading-7 ">
            Vehbi Koç Vakfı çatısı altında yer alan Amerikan Hastanesi, 100
            yıllık bilgi birikimi ve tecrübesiyle en güncel teknolojileri bir
            araya getirerek, kalite odaklı sağlık hizmetleri sunuyor.
          </Text>
          <Text className="text-xl leading-7 mt-4 ">
            Vehbi Koç Vakfı çatısı altında yer alan Amerikan Hastanesi, 100
            yıllık bilgi birikimi ve tecrübesiyle en güncel teknolojileri bir
            araya getirerek, kalite odaklı sağlık hizmetleri sunuyor.
          </Text>
          <Text className="text-xl leading-7 mt-4 ">
            Bu doğrultuda hastalarımıza uluslararası standartlarda ve kalitede
            tıbbi bakım sunabilmek amacıyla “Sürekli Kalite Geliştirme
            Programları” uyguluyoruz. Hastanemizin Türkiye’de Joint Commission
            International (JCI), ISO 9001: Kalite Belgesi, ISO 14001: Çevre
            Yönetim Sistemi ve ISO 27001: Bilgi Güvenliği Yönetim Sistemi
            belgelerinin dördüne birden sahip olan ilk özel hastane olmasının
            gururunu ve sorumluluğunu taşıyoruz. Amerikan Hastanesi, 2002
            yılında aldığı JCI Akreditasyon Belgesi ile “akredite edilmiş
            hastane” ünvanını koruyor ve yenilemek üzere belirli aralıklarla
            denetimden geçiyor. 
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default About;
