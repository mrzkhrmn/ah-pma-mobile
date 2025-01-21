import React from "react";
import { Path, Svg } from "react-native-svg";

const SaveIcon = ({ props, active }: any) => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill={active ? "#1d3587" : "transparent"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.7287 2.21464C12.462 2.29998 13 2.93264 13 3.67131V14L8 11.5L3 14V3.67131C3 2.93264 3.53733 2.29998 4.27133 2.21464C6.74879 1.92707 9.25121 1.92707 11.7287 2.21464Z"
        stroke={active ? "#1d3587" : "black"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default SaveIcon;
