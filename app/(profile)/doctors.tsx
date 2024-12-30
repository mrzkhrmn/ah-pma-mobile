import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const doctorsData = [
    {
      id: 1,
      name: "Ayşegül Turan",
      expertise: "Çocuk Sağlığı ve Hastalıkları",
      image: images.femaleDoctorImage,
    },
    {
      id: 2,
      name: "Ayşegül Turan",
      expertise: "Çocuk Sağlığı ve Hastalıkları",
      image: images.femaleDoctorImage,
    },
    {
      id: 3,
      name: "Ayşegül Turan",
      expertise: "Çocuk Sağlığı ve Hastalıkları",
      image: images.femaleDoctorImage,
    },
    {
      id: 4,
      name: "Ayşegül Turan",
      expertise: "Çocuk Sağlığı ve Hastalıkları",
      image: images.femaleDoctorImage,
    },
    {
      id: 5,
      name: "Ayşegül Turan",
      expertise: "Çocuk Sağlığı ve Hastalıkları",
      image: images.femaleDoctorImage,
    },
    {
      id: 6,
      name: "Ayşegül Turan",
      expertise: "Çocuk Sağlığı ve Hastalıkları",
      image: images.femaleDoctorImage,
    },
  ];

  return (
    <SafeAreaView className=" items-center">
      {selectedDoctor === null ? (
        <>
          <View className="absolute left-2  top-8 p-3">
            <Pressable className="p-4" onPress={() => router.back()}>
              <Image source={icons.backIcon} />
            </Pressable>
          </View>
          <Image source={images.logoImage} />
          <Text className="text-2xl text-center font-semibold mt-10">
            Doktorlar
          </Text>
          <View className="max-w-[340px] items-center ml-1.5  flex flex-row flex-wrap   mx-auto gap-2">
            {doctorsData.map((doctor) => (
              <View key={doctor.id} className=" w-28">
                <Image source={doctor.image} className="w-full" />
                <Pressable onPress={() => setSelectedDoctor(doctor)}>
                  <View className="bg-[#1d3587] gap-2 py-4  px-2">
                    <Text className="text-white font-semibold text-center">
                      {doctor.name}
                    </Text>
                    <Text className="text-white text-center">
                      {doctor.expertise}
                    </Text>
                  </View>
                </Pressable>
              </View>
            ))}
          </View>
        </>
      ) : (
        <SafeAreaView className="w-[350px] items-center px-8 pb-20">
          <View className="absolute left-6  top-8 p-3">
            <Pressable className="p-4" onPress={() => setSelectedDoctor(null)}>
              <Image source={icons.backIcon} />
            </Pressable>
          </View>
          <Image source={images.logoImage} />
          <ScrollView className="mt-4 bg-white w-full pb-32">
            <View className="flex flex-row gap-2">
              <Image
                source={selectedDoctor.image}
                className="w-[88px]"
                resizeMode="cover"
              />
              <View className="gap-5 flex justify w-[68%] py-2">
                <Text className="text-[18px] font-semibold">
                  Prof. Dr. {selectedDoctor.name}
                </Text>
                <Text className=" text-[15px] max-w-full">
                  1989’da İsatanbul Tıp Fakültesi Meme Hastalıkları Araştırma ve
                  Tedavi Derneği ve Ünitesi’nin kuruluşunda görev aldı Derneği
                  ve Ünitesi’nin kuruluşunda görev aldı.
                </Text>
              </View>
            </View>
            <View className="gap-5 flex justify w-full pl-2 py-2">
              <Text className=" text-[15px] max-w-full">
                1989’dan bu yana her hafta yapılan ( 1350 toplantıdan fazla )
                Meme Kanseri Konseyi toplantılarının organizasyonu ve
                yürütmesinde görev aldı. 1994 ve 1995 yıllarında ABD’de Johns
                Hopkins Üniversitesi Tıp Fakültesi Meme Hastalıkları Kliniği ve
                Cerrahi Onkoloji Laboratuvarı’nda ResearchFellow olarak çalıştı.
                1997’de Fellow of American Colage of Surgeons ( F.A.C.S.
                ) olarak kabul edildi. Yurt içi ve yurt dışında çeşitli
                kongrelerde sunulmuş ve dergilerde yayınlanmış 150’den fazla
                bilimsel çalışması bulunuyor. 2 kitapta uzmanlık alanıyla
                ilgili 3 ayrı bölüm yazdı. Springer yayınevi tarafından
                yayınlanmış Breast Disease ve Breast Cancer kitaplarının
                editörlüğünü yaptı. İstanbul Tıp Fakültesi Yönetim Kurulu ve
                Fakülte Kurulu Üyeliği yaptı. Alanında en geniş katılımlı (1000
                kişilik ) 4. Ululsal Meme Hastalıkları Kongresi ( İstanbul Lütfü
                Kırdar ) organizasyonuna katıldı. 2011 yılında yapılan Ulusal
                Meme Hastalıkları Kongresi’nin başkanlığını yaptı. Meme
                hastalıkları mezuniyet sonrasına yönelik 20’den fazla eğitim
                toplantısının düzenlenmesinde katılımcı, düzenleyici ve
                konuşmacı olarak görev aldı. Pek çok kongre ve kursa mide
                kanseri, laparoskopik rektum kanseri ve meme kanseri konularında
                konuşmacı, tartışmacı olarak katıldı. 1997’de Cerrahi Onkoloji
                Derneği’nin kuruluşunda kurucu üye ve başkan olarak hizmet etti.
                Cerrahi Onkoloji dergisinin yayınlanmasında editör olarak katkı
                sağladı. Türkiye Meme Hastalıkları Dernekleri
                Federasyonu’nun kuruluşunda kurucu üye ve 2017-2019 dönemi
                başkanı olarak hizmet etti. Türkiye Gastro-enteroloji Derneği,
                Türk Onkoloji Derneği, İstanbul Meme Derneği ( kurucu üye ),
                Laparoskopik & Endoskopik Minimal İnvaziv Cerrahi Derneği (
                kurucu üye ), Türkiye Öğretim Üyeleri Derneği, American Collage
                of Surgeons ( A.C.S. ), Türk Cerrahi Derneği, Europen
                Association of Laparoscopic Surgery ( E.A.L.S. ), İstanbul
                Cerrahi Derneği  (kurucu üye ) ve World Society for Breast
                üyesi. Başlıca klinik ilgi alanları şöyle; Meme kanseri tanı ve
                tedavisi, Laparoskopik cerrahi, Cerrahi onkoloji.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default Doctors;
