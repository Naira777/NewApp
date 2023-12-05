import React, { useState, useEffect} from "react";
import s from "./index.module.css";
import Product from "./Product";
import { data } from "../../../data";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ProductsPage = ({ ref1 }) => {
  const { language } = useSelector((state) => state.products);
  const { t } = useTranslation();
  const [lang, setLang]= useState(localStorage.getItem('lang')? localStorage.getItem('lang') : 'ge')



  useEffect(() => {
    setLang(localStorage.getItem('lang'))
  }, [language, localStorage.getItem('lang')]);


  return (
    <div className={s.container} ref={ref1}>
      <p className={s.header}>{t("ourproducts")}</p>

      <div className={s.box}>
        {data?.map((item, id) => {
          let newItem;
          if (!lang) {
            newItem = item?.translations[2];
          } else {
            newItem =
            lang === "en"
                ? item.translations[1]
                : lang === "ge"
                ? item.translations[2]
                : item.translations[0];
          }
          return (
            <Product
              key={item.id}
              name={newItem.name}
              desc={newItem.desc}
              image={item.image}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
