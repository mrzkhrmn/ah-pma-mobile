import React from "react";
import { Path, Svg } from "react-native-svg";

const AgreementsIcon = ({ props }: any) => {
  return (
    <Svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.125 14.25V11.625C21.125 10.7299 20.7398 9.87145 20.0541 9.23851C19.3684 8.60558 18.4384 8.25 17.4688 8.25H15.8438C15.5205 8.25 15.2105 8.13147 14.982 7.9205C14.7534 7.70952 14.625 7.42337 14.625 7.125V5.625C14.625 4.72989 14.2398 3.87145 13.5541 3.23851C12.8684 2.60558 11.9384 2.25 10.9688 2.25H8.9375M8.9375 15H17.0625M8.9375 18H13M11.375 2.25H6.09375C5.421 2.25 4.875 2.754 4.875 3.375V20.625C4.875 21.246 5.421 21.75 6.09375 21.75H19.9063C20.579 21.75 21.125 21.246 21.125 20.625V11.25C21.125 8.86305 20.0978 6.57387 18.2693 4.88604C16.4408 3.19821 13.9609 2.25 11.375 2.25Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default AgreementsIcon;
