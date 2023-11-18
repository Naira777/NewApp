import React from "react";
import { useEffect, useState } from "react";
import s from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { API } from "../../../redux/API";
import { useWindowSize } from "../../../CustomHooks/getWindowWidth";
import { useTranslation } from "react-i18next";

const Brands = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.brands);
  const { t } = useTranslation();
console.log(brands)
  const [height, width] = useWindowSize();

  useEffect(() => {
    dispatch(API.getBrands());
  }, []);

  const settings = {
    navigation: {
      nextEl: `.${s.swiper_button_next3}`,
      prevEl: `.${s.swiper_button_prev3}`,
    },
  };

  return (
    <div className={s.container}>
      <p className={s.header}>{t("ourbrands")}</p>

      <div className={s.imageCont}>
      {brands?.length>0 &&  <Swiper spaceBetween={10} {...settings} slidesPerView={width / 270}>
          {brands?.map((data, id) => {
            return (
              <SwiperSlide key={id}>
                <img
                  className={s.image}
                  src={require(`../../../images/${data?.image}`)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>}
      </div>
    </div>
  );
};

export default Brands;
