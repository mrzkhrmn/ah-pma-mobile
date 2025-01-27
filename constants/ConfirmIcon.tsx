import React from "react";
import { Path, Svg } from "react-native-svg";

const ConfirmIcon = ({ props }: any) => {
  return (
    <Svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.14 3.46004L7.11 6.46004C1.04 8.49004 1.04 11.8 7.11 13.82L9.79 14.71L10.68 17.39C12.7 23.46 16.02 23.46 18.04 17.39L21.05 8.37004C22.39 4.32004 20.19 2.11004 16.14 3.46004ZM16.46 8.84004L12.66 12.66C12.51 12.81 12.32 12.88 12.13 12.88C11.94 12.88 11.75 12.81 11.6 12.66C11.31 12.37 11.31 11.89 11.6 11.6L15.4 7.78004C15.69 7.49004 16.17 7.49004 16.46 7.78004C16.75 8.07004 16.75 8.55004 16.46 8.84004Z"
        fill="white"
      />
    </Svg>
  );
};

export default ConfirmIcon;
