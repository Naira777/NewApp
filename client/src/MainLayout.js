import React, { useEffect } from "react";
import Last from "./pages/Last/Last";
import NavBar from "./pages/First/NavBar/NavBar";
import HeaderFirst from "./pages/First/Header/HeaderFirst";
import s from "./MainLayout.module.css";
import Lang from "./pages/First/Lang/Lang";
import { useDispatch } from "react-redux";
import { langChange } from "./redux/Products/slice";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [window.location]);

  useEffect(() => {
    dispatch(langChange(localStorage.getItem("lang")));
  }, [localStorage.getItem("lang")]);

  return (
    <div className={s.main}>
      <div className={s.box}>
        <div className={s.boxLang}>
          <HeaderFirst />
          <Lang />
        </div>
        <NavBar />
      </div>
      <div className={s.box1}>{children}</div>
      <Last />
    </div>
  );
};
export default MainLayout;
