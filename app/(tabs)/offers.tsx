import { View, SafeAreaView, Pressable, Text } from "react-native";
import React, { useState } from "react";
import images from "@/constants/images";
import { Image } from "expo-image";
import { useAppSelector } from "@/context/hooks";
import RequestOffer from "@/components/OffersScreen/RequestOffer";
import RequestedOffers from "@/components/OffersScreen/RequestedOffers";
import OfferDetail from "@/components/OffersScreen/OfferDetail";

const Offers = () => {
  const { offers } = useAppSelector((state: any) => state.auth);
  const [openNewRequest, setOpenNewRequest] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<object | null>(null);

  return (
    <SafeAreaView>
      {selectedOffer ? (
        <OfferDetail
          selectedOffer={selectedOffer}
          setSelectedOffer={setSelectedOffer}
        />
      ) : openNewRequest || offers.length === 0 ? (
        <RequestOffer setOpenNewRequest={setOpenNewRequest} />
      ) : (
        <RequestedOffers
          setSelectedOffer={setSelectedOffer}
          setOpenNewRequest={setOpenNewRequest}
        />
      )}
    </SafeAreaView>
  );
};

export default Offers;
