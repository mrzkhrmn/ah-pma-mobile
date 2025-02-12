import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React, { useRef, useState } from "react";
import { FlatList, Pressable, ScrollView } from "react-native-gesture-handler";
import icons from "@/constants/icons";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import Checkbox from "expo-checkbox";
import { Toast } from "toastify-react-native";
import { DatePickerModal } from "react-native-paper-dates";
import OfferItem from "@/components/OfferItem";
import OperationItem from "./OperationItem";
import { useAppSelector } from "@/context/hooks";
import { useDispatch } from "react-redux";
import { requestOfferSuccess } from "@/context/slices/authSlice";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import AddPhotoIcon from "@/constants/AddPhotoIcon";
import AddOperationIcon from "@/constants/AddOperationIcon";
import ConfirmIcon from "@/constants/ConfirmIcon";

const RequestOffer = ({ setOpenNewRequest }: any) => {
  const { offers } = useAppSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const hospitalOperationsDropdownData = [
    {
      id: 1,
      value: "Deviasyon (Septum Eğriliği) Ameliyatı",
      label: "Deviasyon (Septum Eğriliği) Ameliyatı",
      questions: [
        "Deviasyon (Septum Eğriliği) Ameliyat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
    {
      id: 2,
      value: "Revizyon Burun Cerrahisi",
      label: "Revizyon Burun Cerrahisi",
      questions: [
        "Revizyon Burun Cerrahisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
    {
      id: 3,
      value: "Kaş Estetiği",
      label: "Kaş Estetiği",
      questions: [
        "Kaş Estetiği Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
    {
      id: 4,
      value: "Karın Gerdirme",
      label: "Karın Gerdirme",
      questions: [
        "Karın Gerdirme Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "Karın2 Gerdirme2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
  ];
  const [newOfferData, setNewOfferData] = useState({
    id: offers[offers.length - 1].id + 1,
    newOperations: [],
    answers: [],
    operationImages: [],
    additional: { transfer: false, peopleCount: 1 },
    date: { startDate: "", endDate: "" },
    status: "pending",
  });
  const [transferChecked, setTransferChecked] = useState(false);
  const [landingChecked, setLandingChecked] = useState(false);
  const [countOfPeople, setCountOfPeople] = useState(1);
  const [checked, setChecked] = useState(false);

  const [requestedOperations, setRequestedOperations] = useState([
    hospitalOperationsDropdownData[0],
  ]);

  const [hiddenOperations, setHiddenOperations] = useState(
    hospitalOperationsDropdownData.slice(1)
  );

  const [image, setImage] = useState<string | null>(null);
  const [range, setRange] = React.useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [open, setOpen] = React.useState(false);

  const pickImage = async () => {
    if (isBottomSheetOpen) {
      bottomSheetRef.current?.close(); // Eğer açık ise kapat
    } else {
      bottomSheetRef.current?.present(); // Eğer kapalı ise aç
    }
    setIsBottomSheetOpen(!isBottomSheetOpen); // Durumu tersine çevir
  };

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setNewOfferData({
        ...newOfferData,
        operationImages: [
          ...newOfferData.operationImages,
          result.assets[0].uri,
        ],
      });
    }
  };

  const takePictureFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "İzin Gerekli",
        "Kameraya erişmek için izin vermeniz gerekiyor."
      );
      return;
    }

    // Kamera açma
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setNewOfferData({
        ...newOfferData,
        operationImages: [
          ...newOfferData.operationImages,
          result.assets[0].uri,
        ],
      });
    }
  };

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = ({
    startDate,
    endDate,
  }: {
    startDate: any;
    endDate: any;
  }) => {
    setOpen(false);
    setRange({ startDate, endDate });
    setNewOfferData({
      ...newOfferData,
      date: { startDate: startDate, endDate: endDate },
    });

    [setOpen, setRange];
  };

  const handleIncrement = () => {
    setCountOfPeople(countOfPeople + 1);
    setNewOfferData({
      ...newOfferData,
      additional: {
        ...newOfferData.additional,
        peopleCount: countOfPeople,
      },
    });
  };

  const handleDecrement = () => {
    if (countOfPeople < 2) {
      setLandingChecked(false);
      setCountOfPeople(1);
      setNewOfferData({
        ...newOfferData,
        additional: {
          ...newOfferData.additional,
          peopleCount: 1,
        },
      });
      return;
    }
    setCountOfPeople(countOfPeople - 1);
    setNewOfferData({
      ...newOfferData,
      additional: {
        transfer: newOfferData.additional.transfer,
        peopleCount: countOfPeople,
      },
    });
  };

  const handleAddOperation = () => {
    if (hiddenOperations.length > 0) {
      const operationToShow = hiddenOperations[0];
      setHiddenOperations(hiddenOperations.slice(1));
      setRequestedOperations((prev) => [...prev, operationToShow]);
    }
  };

  const handleChangeDropdown = (operation: any, index: number) => {
    setNewOfferData((prevData) => {
      const updatedOperations: any = [...prevData.newOperations];
      updatedOperations[index] = operation;
      return {
        ...prevData,
        newOperations: updatedOperations,
      };
    });
  };

  const handleDeleteOperation = (id: number, index: number) => {
    const operationToHide = requestedOperations.find(
      (operation) => operation.id === id
    );

    setNewOfferData({
      ...newOfferData,
      newOperations: newOfferData.newOperations.filter(
        (opr) => opr !== operationToHide?.value
      ),
    });

    if (operationToHide) {
      const updatedRequestedOperations = requestedOperations.filter(
        (operation) => operation.id !== id
      );

      const updatedHiddenOperations = [...hiddenOperations, operationToHide];

      setRequestedOperations(updatedRequestedOperations);
      setHiddenOperations(updatedHiddenOperations);

      setNewOfferData((prevData) => {
        const updatedOperations = prevData.newOperations.filter(
          (_, i) => i !== index
        );
        return {
          ...prevData,
          newOperations: updatedOperations,
        };
      });
    }
  };

  const handleRequestOffer = () => {
    try {
      console.log("Offer data: ", newOfferData);
      dispatch(requestOfferSuccess(newOfferData));
      Toast.success("Teklifiniz başarılı bir şekilde gönderildi.");
      setOpenNewRequest(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleAnswerChange = (e: any, index: number) => {
    setNewOfferData((prevData) => {
      const updatedAnswers: any = [...prevData.answers];
      updatedAnswers[index] = e;
      return {
        ...prevData,
        answers: updatedAnswers,
      };
    });
  };

  return (
    <>
      <BottomSheetModal ref={bottomSheetRef} style={styles.container}>
        <BottomSheetView style={styles.contentContainer}>
          <View className="flex-row gap-4">
            <Pressable
              onPress={takePictureFromCamera}
              style={{
                width: 120,
                height: 80,
                backgroundColor: "#1d3587",
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 8,
              }}
            >
              <Text className="text-white font-inter-bold text-xl text-center my-auto">
                Kamera
              </Text>
            </Pressable>
            <Pressable
              onPress={pickImageFromGallery}
              style={{
                width: 120,
                height: 80,
                backgroundColor: "#1d3587",
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 8,
              }}
            >
              <Text className="text-white  text-center my-auto text-xl font-inter-bold">
                Galeriden Seç
              </Text>
            </Pressable>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
      <ScrollView>
        <View className="pb-16">
          <View className=" items-center justify-center">
            <View className="absolute left-6   p-3">
              <Pressable
                className="p-4"
                onPress={() => setOpenNewRequest(false)}
              >
                <Image
                  source={icons.backIcon}
                  style={{ width: 18, height: 18 }}
                />
              </Pressable>
            </View>
            <Text className="text-center font-inter-medium mt-3 text-2xl">
              Teklif İste
            </Text>
          </View>
          {requestedOperations.map((data, index) => (
            <OperationItem
              handleDelete={handleDeleteOperation}
              handleChangeDropdown={handleChangeDropdown}
              operation={data}
              key={index}
              index={index}
              data={hospitalOperationsDropdownData}
              onChange={handleAnswerChange}
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
                <AddOperationIcon />
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
              <AddPhotoIcon />
              <Text className=" text-white font-inter-semibold text-center">
                Fotoğraf Ekle
              </Text>
            </Pressable>
          </View>
          {newOfferData.operationImages.length > 0 && (
            <View className="px-4 mt-8">
              <FlatList
                contentContainerStyle={{ gap: 10 }}
                data={newOfferData.operationImages}
                renderItem={({ item }: any) => (
                  <OfferItem key={item.id} item={item} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )}
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
                  onTouchStart={() => {
                    setTransferChecked((prev) => !prev);
                    setNewOfferData({
                      ...newOfferData,
                      additional: {
                        ...newOfferData.additional,
                        transfer: transferChecked,
                      },
                    });
                  }}
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
                  onTouchStart={() => {
                    setLandingChecked((prev) => !prev);
                  }}
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
            <Pressable
              onPress={handleRequestOffer}
              style={{
                backgroundColor: "#1d3587",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
                paddingHorizontal: 14,
                paddingVertical: 3,
                borderRadius: 5,
              }}
            >
              <ConfirmIcon />
              <Text className="text-white  font-inter-semibold ">
                Teklif İste
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
export default RequestOffer;
