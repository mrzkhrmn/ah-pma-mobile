import React from "react";
import { Path, Svg } from "react-native-svg";

const PapersIcon = ({ props }: any) => {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M33 24.25V19.875C33 18.3832 32.4074 16.9524 31.3525 15.8975C30.2976 14.8426 28.8668 14.25 27.375 14.25H24.875C24.3777 14.25 23.9008 14.0525 23.5492 13.7008C23.1975 13.3492 23 12.8723 23 12.375V9.875C23 8.38316 22.4074 6.95242 21.3525 5.89752C20.2976 4.84263 18.8668 4.25 17.375 4.25H14.25M14.25 25.5H26.75M14.25 30.5H20.5M18 4.25H9.875C8.84 4.25 8 5.09 8 6.125V34.875C8 35.91 8.84 36.75 9.875 36.75H31.125C32.16 36.75 33 35.91 33 34.875V19.25C33 15.2718 31.4196 11.4564 28.6066 8.6434C25.7936 5.83035 21.9782 4.25 18 4.25Z"
        stroke="#1D3587"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default PapersIcon;
