import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const TransferIcon = ({ props }: any) => {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.5 35L5 27.5M5 27.5L12.5 20M5 27.5H27.5M27.5 5L35 12.5M35 12.5L27.5 20M35 12.5H12.5"
        stroke="#1D3587"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default TransferIcon;
