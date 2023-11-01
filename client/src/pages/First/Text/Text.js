import React, { useEffect, useState } from "react";
import * as Styled from "./styled";

const Text = () => {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    setMode(true);
  }, []);

  return (
    <Styled.Box>
      <Styled.T mode={mode}>
        <Styled.TextB>
          We provide outstanding
          <br />
          building construction services <br />
        </Styled.TextB>
        <Styled.T3>
          We have provided complete remodeling and construction
          <br /> solutions for residential and commercial properties in cities.
        </Styled.T3>
      </Styled.T>
    </Styled.Box>
  );
};
export default Text;
