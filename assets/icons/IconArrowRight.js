import React from "react";
import Svg, { Path } from "react-native-svg";

const IconArrowRight = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" x="0" y="0">
    <Path
      {...props}
      d="M0.9,15c0.2,0,0.5-0.1,0.6-0.2L9,7.5L1.5,0.2c-0.3-0.3-0.9-0.3-1.2,0s-0.3,0.9,0,1.2l6.3,6.1l-6.3,6.1c-0.3,0.3-0.3,0.9,0,1.2C0.4,14.9,0.7,15,0.9,15z"
    />
  </Svg>
);
export default IconArrowRight;
