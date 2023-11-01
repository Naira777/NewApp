import React from "react";
import Left from "./Left/Left";
import  Right  from "./Left/Right/Right";
import * as Styled from "./styled";


const Middle = ({ref1}) => {
  return (
    <Styled.Box ref={ref1}>
      <Left />
      <Right />
    </Styled.Box>
  )
};
export default Middle;
