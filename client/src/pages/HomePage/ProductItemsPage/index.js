import React, { useEffect, useState } from "react";
import s from "./index.module.css";
import { NavLink, useParams } from "react-router-dom";
import MainLayout from "../../../MainLayout";
import { data } from "./../../../data";
import { filterById } from "../../../helper";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ProductItemsPage = () => {
  const { language } = useSelector((state) => state.products);
  const [lang, setLang]= useState(localStorage.getItem('lang')? localStorage.getItem('lang') : 'ge')
  const [newData, setNewData] = useState([]);
  const { filtertype } = useParams();
  const { t } = useTranslation();


  useEffect(() => {
    setNewData(filterById(data, filtertype));
  }, [filtertype]);


  useEffect(() => {
    setLang(localStorage.getItem('lang'))
  }, [language, localStorage.getItem('lang')]);



  return (
    <MainLayout>
      {" "}
      <div className={s.box}>
        {newData.length >= 0 &&
          newData[0]?.sections?.map((item, index) => {
            let newItem;
            if (lang === "") {
              newItem = item?.translations[2];
            } else {
              newItem =
                lang === "en"
                  ? item?.translations[1]
                  : lang === "ge"
                  ? item?.translations[2]
                  : item?.translations[0];
            }
            return (
              <div key={item.id} className={s.boxAll}>
                <p className={s.header}> {newItem?.name} </p>
                <div className={s.box1}>
                  {item?.image && (
                    <img
                      className={s.img}
                      src={require(`../../../DataImages/${item?.image}`)}
                    />
                  )}

                  <NavLink className={s.button} to={`/products/${item?.id}`}>
                    {t("models")}
                  </NavLink>
                </div>
              </div>
            );
          })}
      </div>
    </MainLayout>
  );
};

export default ProductItemsPage;
