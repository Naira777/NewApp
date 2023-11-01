import React, { useEffect, useState } from "react";
import * as Styled from "./styled";

const Text = () => {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    setMode(true);
  }, []);

  return (
    <Styled.Box1>
      <Styled.T1 mode={mode}>
        <Styled.TextB1>
          We are professional for building construction <br />
        </Styled.TextB1>
      </Styled.T1>

      <Styled.T11 mode={mode}>
        We have provided complete remodeling and construction <br />
        solutions forresidential and commercial properties in cities.
      </Styled.T11>
    </Styled.Box1>
  );
};
export default Text;
