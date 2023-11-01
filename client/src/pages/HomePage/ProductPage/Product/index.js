import React from 'react'
import s from './index.module.css'
import { NavLink } from 'react-router-dom';


const Product = ({ desc, image, name, id }) => {



  return (<div className={s.container}>
    <div className={s.imgBox}>
      <img className={s.img} src={require(`../../../../DataImages/${image}`)} />

    </div>

    <p className={s.desc}>{desc}</p>

    <NavLink className={s.button} to={`/product/${id}`} >{name} </NavLink>



  </div>)
}

export default Product