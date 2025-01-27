import Svg, { Path } from "react-native-svg";
import React from "react";

const OfferPendingIcon = (props: any) => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.5 7.92993V13.9299C22.5 15.4299 22 16.6799 21.12 17.5599C20.25 18.4299 19 18.9299 17.5 18.9299V21.0599C17.5 21.8599 16.61 22.34 15.95 21.9L11.5 18.9299H9.38C9.46 18.6299 9.5 18.3199 9.5 17.9999C9.5 16.9799 9.11 16.04 8.47 15.33C7.75 14.51 6.68 13.9999 5.5 13.9999C4.38 13.9999 3.36 14.46 2.63 15.21C2.54 14.81 2.5 14.3799 2.5 13.9299V7.92993C2.5 4.92993 4.5 2.92993 7.5 2.92993H17.5C20.5 2.92993 22.5 4.92993 22.5 7.92993Z"
        stroke="#ca8a04"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.5 18C9.5 19.2 8.97001 20.27 8.14001 21C7.43001 21.62 6.51 22 5.5 22C3.29 22 1.5 20.21 1.5 18C1.5 16.74 2.08 15.61 3 14.88C3.69 14.33 4.56 14 5.5 14C7.71 14 9.5 15.79 9.5 18Z"
        stroke="#ca8a04"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.75 16.75V18.25L4.5 19"
        stroke="#ca8a04"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 11H16"
        stroke="#ca8a04"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default OfferPendingIcon;
