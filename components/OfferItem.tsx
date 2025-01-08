import images from "@/constants/images";
import { Image } from "expo-image";
import { View } from "react-native";

const OfferItem = ({ item }) => {
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
        source={item}
        style={{ width: 150, height: 150 }}
        contentFit="cover"
      />
    </View>
  );
};

export default OfferItem;
