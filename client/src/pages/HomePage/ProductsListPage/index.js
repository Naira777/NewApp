import React from "react";
import { useEffect, useState } from "react";
import s from "./index.module.css";
import axios from "axios";
import { data } from "../../../data";
import { useParams } from "react-router-dom";
import MainLayout from "../../../MainLayout";
import { getProductCategoryName, getProductsByCategory } from "../../../helper";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../../../redux/API";
import { useTranslation } from "react-i18next";

const ProductsListPage = () => {
  const { filtertype } = useParams();
  const [catName, setCatname] = useState("");
  const {t} = useTranslation();

  const [count, setCount] = useState(0);
  const [productsList, setProductsList] = useState(null);
  const { products } = useSelector((state) => state.products);
  const { language } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log('Lang',language)
  useEffect(() => {
    dispatch(API.getProducts());

    if(language === ''){

      setCatname(getProductCategoryName(data, filtertype)?.translations[2]?.name); 
    }else{

    language === "en" && setCatname(getProductCategoryName(data, filtertype)?.translations[1]?.name);
    language === "ru" && setCatname(getProductCategoryName(data, filtertype)?.translations[0]?.name);
    language === "ge" && setCatname(getProductCategoryName(data, filtertype)?.translations[2]?.name);
    }

    setProductsList(products?.filter((item) => item.categoryId === filtertype));

    setCount(3);
  }, [filtertype, language]);

  useEffect(() => {
 

    language === "en" && setCatname(getProductCategoryName(data, filtertype)?.translations[1]?.name);
    language === "ru" && setCatname(getProductCategoryName(data, filtertype)?.translations[0]?.name);
    language === "ge" && setCatname(getProductCategoryName(data, filtertype)?.translations[2]?.name);


  }, []);


  useEffect(() => {
    setProductsList(products?.filter((item) => item.categoryId == filtertype));
  }, [filtertype, products]);

  useEffect(() => {
    dispatch(API.getProducts());

    setCount(3);
  }, []);

  const handleClick = () => {
    setCount((count) => count + 3);
  };

  return (
    <MainLayout>
      <div className={s.container}>
        <p className={s.header}>{catName}</p>

        {productsList?.map((item, index) => {
          if (index <= count - 1) {

            const newItem =
                         localStorage.getItem("lang") === "en"
                           ? item.translations[1]
                           : localStorage.getItem("lang") === "ge"
                           ? item.translations[2]
                           : item.translations[0];
                          
            return (
              <div key={item._id} className={s.box}>
                {item.image && (
                  <img
                    className={s.img}
                    src={require(`../../../images/${item.image}`)}
                  />
                )}

                <p className={s.desc}>{newItem.desc}</p>
              </div>
            );
          }
        })}
        {count < productsList?.length && (
          <button className={s.button} onClick={handleClick}>
          {t('loadmore')}
          </button>
        )}
      </div>
    </MainLayout>
  );
};

export default ProductsListPage;
