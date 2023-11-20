import React from "react";
import s from "./index.module.css";
import Product from "./Product";
import { data } from "../../../data";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ProductsPage = ({ ref1 }) => {
  const { language } = useSelector((state) => state.products);
  const { t } = useTranslation();


  return (
    <div className={s.container} ref={ref1}>
      <p className={s.header}>{t("ourproducts")}</p>

      <div className={s.box}>
        {data?.map((item, id) => {
          let newItem;
          if (!language) {
            newItem = item?.translations[2];
          } else {
            newItem =
            language === "en"
                ? item.translations[1]
                : language === "ge"
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
