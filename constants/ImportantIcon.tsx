import React from "react";
import { Path, Svg } from "react-native-svg";

const ImportantIcon = ({ props }: any) => {
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
        d="M20 15V21.25M35 20C35 21.9698 34.612 23.9204 33.8582 25.7403C33.1044 27.5601 31.9995 29.2137 30.6066 30.6066C29.2137 31.9995 27.5601 33.1044 25.7403 33.8582C23.9204 34.612 21.9698 35 20 35C18.0302 35 16.0796 34.612 14.2597 33.8582C12.4399 33.1044 10.7863 31.9995 9.3934 30.6066C8.00052 29.2137 6.89563 27.5601 6.14181 25.7403C5.38799 23.9204 5 21.9698 5 20C5 16.0218 6.58035 12.2064 9.3934 9.3934C12.2064 6.58035 16.0218 5 20 5C23.9782 5 27.7936 6.58035 30.6066 9.3934C33.4196 12.2064 35 16.0218 35 20ZM20 26.25H20.0133V26.2633H20V26.25Z"
        stroke="#1D3587"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ImportantIcon;
