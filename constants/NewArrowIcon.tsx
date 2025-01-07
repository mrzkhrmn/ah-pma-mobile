import Svg, { Path } from "react-native-svg";
import React from "react";

const NewArrowIcon = (props: any) => {
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
        d="M16.64 3.46004L7.61 6.46004C1.54 8.49004 1.54 11.8 7.61 13.82L10.29 14.71L11.18 17.39C13.2 23.46 16.52 23.46 18.54 17.39L21.55 8.37004C22.89 4.32004 20.69 2.11004 16.64 3.46004ZM16.96 8.84004L13.16 12.66C13.01 12.81 12.82 12.88 12.63 12.88C12.44 12.88 12.25 12.81 12.1 12.66C11.81 12.37 11.81 11.89 12.1 11.6L15.9 7.78004C16.19 7.49004 16.67 7.49004 16.96 7.78004C17.25 8.07004 17.25 8.55004 16.96 8.84004Z"
        fill="white"
      />
    </Svg>
  );
};

export default NewArrowIcon;
