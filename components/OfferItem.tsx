import images from "@/constants/images";
import { Image } from "expo-image";
import { View } from "react-native";

const OfferItem = () => {
  return (
    <View
      style={[
        {
          width: 130,
          height: 127,
          overflow: "hidden",
          borderRadius: 8,
        },
      ]}
    >
      <Image
        source={images.noseOfferImage}
        style={{ width: 255, height: 140, objectFit: "cover" }}
      />
    </View>
  );
};

export default OfferItem;
