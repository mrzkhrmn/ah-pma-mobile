import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ShareIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.811 7.271a1.5 1.5 0 1 0 0 1.458m0-1.458a1.495 1.495 0 0 1 0 1.458m0-1.458L11.19 3.73m-6.378 5 6.378 3.542m0-8.542a1.5 1.5 0 1 0 2.648-1.406 1.5 1.5 0 0 0-2.648 1.406Zm0 8.542a1.5 1.5 0 1 0 2.624 1.458 1.5 1.5 0 0 0-2.624-1.458Z"
    />
  </Svg>
);
export default ShareIcon;
