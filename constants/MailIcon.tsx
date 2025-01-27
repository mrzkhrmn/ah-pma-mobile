import React from "react";
import { Path, Svg } from "react-native-svg";

const MailIcon = ({ props }: any) => {
  return (
    <Svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.125 6.75V17.25C18.125 17.8467 17.9275 18.419 17.5758 18.841C17.2242 19.2629 16.7473 19.5 16.25 19.5H3.75C3.25272 19.5 2.77581 19.2629 2.42417 18.841C2.07254 18.419 1.875 17.8467 1.875 17.25V6.75M18.125 6.75C18.125 6.15326 17.9275 5.58097 17.5758 5.15901C17.2242 4.73705 16.7473 4.5 16.25 4.5H3.75C3.25272 4.5 2.77581 4.73705 2.42417 5.15901C2.07254 5.58097 1.875 6.15326 1.875 6.75M18.125 6.75V6.993C18.125 7.37715 18.0431 7.75491 17.887 8.0903C17.7309 8.42569 17.5059 8.70754 17.2333 8.909L10.9833 13.524C10.6877 13.7425 10.3472 13.8582 10 13.8582C9.65275 13.8582 9.31233 13.7425 9.01667 13.524L2.76667 8.91C2.4941 8.70854 2.26906 8.42669 2.11297 8.0913C1.95689 7.75591 1.87496 7.37815 1.875 6.994V6.75"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default MailIcon;
