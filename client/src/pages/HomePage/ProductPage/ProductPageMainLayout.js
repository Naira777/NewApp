import React from 'react'
import s from './index.module.css'
import Product from './Product';
import {data} from '../../../data'
import MainLayout from '../../../MainLayout';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const ProductPageMainLayout = ({ref1}) => {

    const {t} = useTranslation();
    const { language } = useSelector((state) => state.products);

    return (<MainLayout><div className={s.container} ref={ref1}>
        <p className={s.header}>{t('ourproducts')}</p>


        <div className={s.box} >
        {data?.map((item, id) => {
          const newItem =
            language === "en"
              ? item.translations[1]
              : language === "ge"
              ? item.translations[2]
              : item.translations[0];

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
    </MainLayout>)
}

export default ProductPageMainLayout