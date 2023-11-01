import React from "react";
import Gallery from "./Gallery/Gallery";
import HeaderFirst from "./Header/HeaderFirst";
import NavBar from "./NavBar/NavBar";
import * as Styled from "./styled";
import s from "./First.module.css";
import Lang from "./Lang/Lang";

const First = ({ handleClick1, handleClick2, handleClick3 }) => {
  return (
    <Styled.Content>
      <div className={s.box1}>
        <div className={s.langBox}>
          <HeaderFirst />
          <div>
            <Lang />
          </div>
        </div>
        <div className={s.navbar}>
          <NavBar
            handleClick1={handleClick1}
            handleClick2={handleClick2}
            handleClick3={handleClick3}
          />
        </div>
      </div>

      <Gallery />
    </Styled.Content>
  );
};
export default First;
