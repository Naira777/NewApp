import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = ({ handleClick1, handleClick2, handleClick3 }) => {
  const param = window.location.pathname;
  const { t } = useTranslation();

  return (
    <div className={s.box}>
      <p className={s.link}>
        <NavLink
          to={"/"}
          activeStyle={{ color: "#FCA83C" }}
          style={{ color: "brown", textDecoration: "none" }}
        >
          {t("home")}
        </NavLink>
      </p>

      {param == "/" ? (
        <p className={s.link}>
          <div
            onClick={handleClick2}
            style={{
              color: "brown",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {t("about")}
          </div>
        </p>
      ) : (
        <p className={s.link}>
          <div>
            <NavLink
              to={"/about"}
              activeStyle={{ color: "#FCA83C" }}
              style={{ color: "brown", textDecoration: "none" }}
            >
              {t("about")}
            </NavLink>
          </div>
        </p>
      )}

      {param == "/" ? (
        <p className={s.link}>
          <div
            onClick={handleClick3}
            style={{ color: "brown", textDecoration: "none" }}
          >
            {t("products")}
          </div>
        </p>
      ) : (
        <p className={s.link}>
          <div>
            <NavLink
              to={"/products"}
              activeStyle={{ color: "#FCA83C" }}
              style={{ color: "brown", textDecoration: "none" }}
            >
              {t("products")}
            </NavLink>
          </div>
        </p>
      )}

      <p className={s.link}>
        <NavLink
          to={"/news"}
          activeStyle={{ color: "#FCA83C" }}
          style={{ color: "brown", textDecoration: "none" }}
        >
          {t("news")}
        </NavLink>
      </p>

      <p className={s.link}>
        {param == "/" ? (
          <div
            onClick={handleClick1}
            style={{ color: "brown", textDecoration: "none" }}
          >
            {t("contact")}
          </div>
        ) : (
          <div>
            <NavLink
              to={"/contact"}
              activeStyle={{ color: "#FCA83C" }}
              style={{ color: "brown", textDecoration: "none" }}
            >
              {t("contact")}
            </NavLink>
          </div>
        )}
      </p>
    </div>
  );
};
export default NavBar;
