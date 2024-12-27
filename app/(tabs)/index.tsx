import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";
import ShareIcon from "../../assets/icons/ShareIcon";
import { useDispatch } from "react-redux";
import {
  logoutFailure,
  logoutStart,
  logoutSuccess,
} from "@/context/slices/authSlice";
import { router } from "expo-router";

export default function Index() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutStart());
    try {
      dispatch(logoutSuccess());
      router.replace("/sign-in");
      console.log("Logged out");
    } catch (error) {
      dispatch(logoutFailure(error.message));
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView className="h-full">
      <View className="px-5">
        <View className="flex flex-row  items-center justify-between ">
          <Image source={icons.flterIcon} />
          <Image source={images.logoImage} />
          <Pressable onPress={handleLogout}>
            <Image source={icons.profileIcon} />
          </Pressable>
        </View>
        <View>
          <View className="h-[300px]  flex justify-end rounded-lg overflow-hidden">
            <Image
              source={images.oldWomen}
              className="size-full absolute top-0 left-0"
            />
            <View className="bg-white flex-end">
              <Text className="text-[12px]">
                Artık Yılların Hesabını Yapmayın...
              </Text>
              <View>
                <Pressable>
                  <ShareIcon />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
