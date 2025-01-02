import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import images from "@/constants/images";
import Checkbox from "expo-checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "@/context/slices/authSlice";
import { router } from "expo-router";
import { Alert } from "react-native";
import { Image } from "expo-image";

const showAlert = () => {
  Alert.alert(
    "Kullanım Koşulları Reddedildi!",
    "Devam etmek için kullanım koşullarını onaylayın",
    [
      {
        text: "Geri",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );
};

export default function index() {
  const { authUser, loading } = useSelector((state) => state.auth);
  const [checked, setChecked] = useState(false);
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSignIn = (e: any) => {
    dispatch(signInStart());
    console.log(authUser);
    try {
      if (!checked) {
        dispatch(signInFailure("Şartlar kabul edilmedi"));
        return showAlert();
      }
      setTimeout(() => {
        dispatch(signInSuccess(signInData));
        router.replace("/(tabs)/home");
        console.log(signInData, "anasayfaya yönlendir");
      }, 1000);
    } catch (error: any) {
      console.log(error.message);
      dispatch(signInFailure(error.message));
    }
  };

  console.log(loading);

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="px-5 flex items-center mt-28  h-full gap-10">
          <Image
            source={images.pmaLogo}
            contentFit="cover"
            style={{ width: 135, height: 70 }}
          />
          <View className="w-3/4 flex items-center gap-4">
            <View className=" flex items-center w-full">
              <Text className="text-start self-start">Kullanıcı Adı</Text>
              <TextInput
                id="username"
                className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
                placeholder="username"
                onChangeText={(event) =>
                  setSignInData({ ...signInData, username: event })
                }
              />
            </View>
            <View className=" flex items-center w-full">
              <Text className="text-start self-start">Şifre</Text>
              <TextInput
                id="password"
                className="border border-black/20 w-full py-1.5 px-2 rounded-lg bg-white"
                placeholder="username"
                secureTextEntry={true}
                keyboardType="numeric"
                onChangeText={(event) =>
                  setSignInData({ ...signInData, password: event })
                }
              />
            </View>
            <View className="flex flex-row px-4 gap-2">
              <Checkbox
                onTouchStart={() => setChecked(!checked)}
                style={{ borderWidth: 1, borderRadius: 7 }}
                color={"#00000053"}
                className="rounded-lg border overflow-hidden"
                value={checked}
              />
              <Text className="text-[14px] leading-[17px]">
                Uygulamayı kullanmaya devam ederek{" "}
                <Text className="text-[#1d3587]">üyelik koşullarını</Text> ve{" "}
                <Text className="text-[#1d3587]">
                  kişisel verilerimin korunmasını
                </Text>{" "}
                kabul ediyorum.
              </Text>
            </View>
            <Pressable
              disabled={loading}
              className={`bg-[#1d3587] py-2 px-[20px] rounded-lg ${
                loading ? "opacity-20" : "opacity-100"
              }`}
              onPress={handleSignIn}
            >
              <Text className="text-white text-base font-bold">Giriş</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
