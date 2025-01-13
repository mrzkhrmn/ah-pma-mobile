import React from "react";
import { Path, Svg } from "react-native-svg";

const InfoIcon = ({ props }: any) => {
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
        d="M13.75 35V26.875C13.75 25.84 14.59 25 15.625 25H19.375C20.41 25 21.25 25.84 21.25 26.875V35M21.25 35H28.75V5.90833M21.25 35H33.75V17.9167M28.75 5.90833L31.25 5M28.75 5.90833L11.25 12.2733M33.75 17.9167L28.75 16.25M33.75 17.9167L36.25 18.75M3.75 35H6.25M6.25 35H36.25M6.25 35V5H11.25V12.2733M3.75 15L11.25 12.2733"
        stroke="#1D3587"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default InfoIcon;
