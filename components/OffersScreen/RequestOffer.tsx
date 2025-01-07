import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import images from "@/constants/images";
import { FlatList, Pressable, ScrollView } from "react-native-gesture-handler";
import icons from "@/constants/icons";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import Checkbox from "expo-checkbox";
import { Toast } from "toastify-react-native";
import { DatePickerModal } from "react-native-paper-dates";
import OfferItem from "@/components/OfferItem";
import OperationItem from "./OperationItem";

const RequestOffer = ({ setOpenNewRequest }: any) => {
  const [requestedOffers, setRequestedOffers] = useState([
    {
      id: 1,
      source: images.noseOfferImage,
    },
    {
      id: 2,
      source: images.noseOfferImage,
    },
    {
      id: 3,
      source: images.noseOfferImage,
    },
  ]);
  const [requestedOperationsCount, setRequestedOperationsCount] = useState(1);
  const [transferChecked, setTransferChecked] = useState(false);
  const [landingChecked, setLandingChecked] = useState(false);
  const [countOfPeople, setCountOfPeople] = useState(1);
  const [checked, setChecked] = useState(false);
  const hospitalOperationsDropdownData = [
    {
      id: 1,
      value: "deviasyon",
      label: "Deviasyon (Septum Eğriliği) Ameliyatı",
      questions: [
        "Deviasyon (Septum Eğriliği) Ameliyat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
    {
      id: 2,
      value: "revizyonBurun",
      label: "Revizyon Burun Cerrahisi",
      questions: [
        "Revizyon Burun Cerrahisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
    {
      id: 3,
      value: "kasEstetigi",
      label: "Kaş Estetiği",
      questions: [
        "Kaş Estetiği Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
    {
      id: 4,
      value: "karinGerdirme",
      label: "Karın Gerdirme",
      questions: [
        "Karın Gerdirme Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "Karın2 Gerdirme2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
  ];
  const [requestedOperations, setRequestedOperations] = useState([
    hospitalOperationsDropdownData[0], // İlk operasyon
  ]);

  const [hiddenOperations, setHiddenOperations] = useState(
    hospitalOperationsDropdownData.slice(1) // Geri kalan operasyonlar
  );

  const [image, setImage] = useState<string | null>(null);
  const [range, setRange] = React.useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [open, setOpen] = React.useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
    },
    [setOpen, setRange]
  );

  const requestOffer = () => {
    try {
      Toast.success("Teklifiniz başarılı bir şekilde gönderildi.");
      setOpenNewRequest(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleIncrement = () => {
    setCountOfPeople(countOfPeople + 1);
  };

  const handleDecrement = () => {
    if (countOfPeople < 2) {
      setLandingChecked(false);
      setCountOfPeople(1);
      return;
    }
    setCountOfPeople(countOfPeople - 1);
  };

  const handleAddOperation = () => {
    if (hiddenOperations.length > 0) {
      const operationToShow = hiddenOperations[0]; // İlk gizli operasyon
      setHiddenOperations(hiddenOperations.slice(1)); // Gizli listeden çıkar
      setRequestedOperations((prev) => [...prev, operationToShow]); // Gösterilenlere ekle
    }
  };

  const handleDeleteOperation = (id) => {
    // Silmek istediğimiz operasyonu buluyoruz
    const operationToHide = requestedOperations.find(
      (operation) => operation.id === id
    );
    if (operationToHide) {
      // Silinen operasyonu requestedOperations'dan çıkar
      const updatedRequestedOperations = requestedOperations.filter(
        (operation) => operation.id !== id
      );
      // Silinen operasyonu hiddenOperations listesine ekle
      const updatedHiddenOperations = [...hiddenOperations, operationToHide];

      // Her iki listeyi de güncelliyoruz
      setRequestedOperations(updatedRequestedOperations);
      setHiddenOperations(updatedHiddenOperations);
    }
  };
  return (
    <ScrollView>
      <View className="pb-16">
        <Text className="font-inter-medium text-xl text-center mt-4">
          TEKLİF İSTE
        </Text>
        {requestedOperations.map((data, index) => (
          <OperationItem
            handleDelete={handleDeleteOperation}
            operation={data}
            key={index}
            index={index}
            data={hospitalOperationsDropdownData}
          />
        ))}
        {hiddenOperations.length > 0 && (
          <View className="items-center px-4 mt-10">
            <Pressable
              onPress={handleAddOperation}
              style={{
                width: 150,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderRadius: 8,
                backgroundColor: "#1d3587",
                gap: 8,
              }}
            >
              <Image
                source={icons.noteAddIcon}
                style={{ width: 24, height: 24 }}
              />
              <Text className="text-white bg-[#1d3587] font-inter-semibold rounded-lg">
                Operasyon Ekle
              </Text>
            </Pressable>
          </View>
        )}
        <View className="items-center px-4 mt-8">
          <Pressable
            onPress={pickImage}
            style={{
              width: 150,
              backgroundColor: "#1d3587",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 8,
              gap: 10,
              borderRadius: 6,
            }}
          >
            <Image
              source={icons.galleryAddIcon}
              style={{ width: 24, height: 24 }}
            />
            <Text className=" text-white font-inter-semibold text-center">
              Fotoğraf Ekle
            </Text>
          </Pressable>
        </View>
        <View className="px-4 mt-8">
          <FlatList
            contentContainerStyle={{ gap: 10 }}
            data={requestedOffers}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(data) => <OfferItem key={data.id} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View className="flex flex-row px-4 gap-2 my-6">
          <Checkbox
            onTouchStart={() => setChecked(!checked)}
            style={{ borderWidth: 1, borderRadius: 7 }}
            color={"#00000053"}
            className="rounded-lg border overflow-hidden"
            value={checked}
          />
          <Text className="text-[14px] pr-6">
            Teklif talep ederek{" "}
            <Text className="text-[#1d3587]">
              özel nitelikli kişisel veri açık rıza metnini
            </Text>{" "}
            ve okuyup onayladığımı kabul ederim.
          </Text>
        </View>

        <View className="px-4">
          <Text className="text-lg font-inter-medium">Ek Talepler</Text>
          <View className="flex flex-row gap-4 justify-center duration-300">
            <View className="flex flex-row items-center gap-1 my-6">
              <Checkbox
                onTouchStart={() => setTransferChecked(!transferChecked)}
                style={{
                  borderWidth: 1,
                  borderRadius: 7,
                  width: 20,
                  height: 20,
                }}
                color={"#00000053"}
                className="rounded-lg border overflow-hidden"
                value={transferChecked}
              />
              <Text className="text-[16px] ">Transfer</Text>
            </View>
            <View className="flex flex-row items-center gap-1   my-6">
              <Checkbox
                onTouchStart={() => setLandingChecked(!landingChecked)}
                style={{
                  borderWidth: 1,
                  borderRadius: 7,
                  width: 20,
                  height: 20,
                }}
                color={"#00000053"}
                className="rounded-lg border overflow-hidden"
                value={landingChecked}
              />
              <Text className="text-[16px] ">Konaklama</Text>
            </View>
            {landingChecked && (
              <View
                className={`flex flex-row items-center transition duration-300`}
              >
                <Pressable
                  onPress={handleDecrement}
                  style={{
                    backgroundColor: "#1d3587",
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 6,
                  }}
                >
                  <Text className=" text-white  font-inter-bold   rounded-lg ">
                    -
                  </Text>
                </Pressable>
                <Text className="bg-white items-center h-[24px] text-center text-2xl px-4">
                  {countOfPeople}
                </Text>
                <Pressable
                  onPress={() => handleIncrement()}
                  style={{
                    backgroundColor: "#1d3587",
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 6,
                  }}
                >
                  <Text className=" text-white  font-inter-bold   rounded-lg ">
                    +
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
        <View className=" flex items-center w-full px-10 mt-4">
          <DatePickerModal
            saveLabel="Kaydet"
            startLabel="Başlangiç"
            endLabel="Bitiş"
            label="Tarih aralığı seçin"
            locale="tr"
            mode="range"
            visible={open}
            onDismiss={onDismiss}
            startDate={range.startDate}
            endDate={range.endDate}
            onConfirm={onConfirm}
          />
          <TouchableOpacity
            className="bg-white px-4 py-2 rounded-lg"
            onPress={() => setOpen(true)}
          >
            <Text className="text-start self-start font-inter-medium">
              Uygun Tarih Aralığı Seçiniz
            </Text>
          </TouchableOpacity>
        </View>
        <View className="items-center my-6">
          <Pressable onPress={requestOffer}>
            <Text className="text-white bg-[#1d3587] px-6 py-3 font-inter-semibold rounded-lg">
              Teklif İste
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
export default RequestOffer;
