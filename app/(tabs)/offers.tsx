import { View, SafeAreaView, Pressable, Text } from "react-native";
import React, { useState } from "react";
import images from "@/constants/images";
import { Image } from "expo-image";
import { useAppSelector } from "@/context/hooks";
import RequestOffer from "@/components/OffersScreen/RequestOffer";
import RequestedOffers from "@/components/OffersScreen/RequestedOffers";

const Offers = () => {
  const { offers } = useAppSelector((state) => state.auth);
  const [openNewRequest, setOpenNewRequest] = useState(false);

  return (
    <SafeAreaView>
      <View className="items-center">
        <Image source={images.logoImage} style={{ width: 98, height: 50 }} />
      </View>
      {openNewRequest || offers.length === 0 ? (
        <RequestOffer setOpenNewRequest={setOpenNewRequest} />
      ) : (
        <RequestedOffers setOpenNewRequest={setOpenNewRequest} />
      )}
    </SafeAreaView>
  );
};

export default Offers;
