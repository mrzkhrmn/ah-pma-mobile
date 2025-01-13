import React from "react";
import { Path, Svg } from "react-native-svg";

const PaymentIcon = ({ props }: any) => {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.75 14.25H36.25M3.75 15.5H36.25M8.75 24.25H18.75M8.75 28H13.75M7.5 33H32.5C33.4946 33 34.4484 32.6049 35.1516 31.9016C35.8549 31.1984 36.25 30.2446 36.25 29.25V11.75C36.25 10.7554 35.8549 9.80161 35.1516 9.09835C34.4484 8.39509 33.4946 8 32.5 8H7.5C6.50544 8 5.55161 8.39509 4.84835 9.09835C4.14509 9.80161 3.75 10.7554 3.75 11.75V29.25C3.75 30.2446 4.14509 31.1984 4.84835 31.9016C5.55161 32.6049 6.50544 33 7.5 33Z"
        stroke="#1D3587"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default PaymentIcon;
