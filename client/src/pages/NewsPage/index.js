import s from "./index.module.css";
import MainLayout from "../../MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../redux/API";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function NewsPage() {
  const {t} = useTranslation();
  const { news } = useSelector((state) => state.news);
  const { language } = useSelector((state) => state.products);

  const [newArr, setNewArr]= useState([])
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(API.getNews());
    setCount(3);
  }, [language]);


  useEffect(() => {
    let arr
    if(news.length>0 ){
       arr= [...news]
       if(arr.length>0){
    setNewArr(arr.reverse())
    }
    }
    
  }, [news]);

  const handleClick = () => {
    setCount((count) => count + 3);
  };


  return (
    <MainLayout>
      <p className={s.header1}>{t('ournews')}</p>
      {newArr?.length>0 && newArr?.map((item, index) => {
         if (index <= count - 1) {
        const newItem =
          language === "en"
            ? item.translations[1]
            : language === "ge"
            ? item.translations[2]
            : item.translations[0];

      
        return (
          <div key={item._id} className={s.container}>
            <p className={s.header}>{newItem.header}</p>
            <div className={s.box}>
              <img
                className={s.img}
                src={require(`../../images/${item.image}`)}
              />
              <p className={s.article}>{newItem.article}</p>
            </div>
          </div>
        );
         }
      })}
      <div className={s.box1}>
       {count < newArr?.length && (
          <button className={s.button} onClick={handleClick}>
          {t('loadmore')}
          </button>
        )}</div>
    </MainLayout>
  );
}
