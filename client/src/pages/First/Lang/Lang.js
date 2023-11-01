import React, {useState, useEffect} from 'react'
import s from './Lang.module.css'
import flag_ge from "../../../assets/ge.png";
import vector from "../../../assets/vec.png";
import flag_rus from "../../../assets/rus.png";
import flag_eng from "../../../assets/eng.png";
import {useRef} from "react";
import {useTranslation} from "react-i18next";
import { useDispatch } from 'react-redux';
import { langChange } from '../../../redux/Products/slice';
import '../../../Translation/i18n';

const  Lang = () => {

   const [mode, setMode] = useState(false)
    const [userLanguage, setUserLanguage] = useState(
        localStorage.getItem("lang") || 'ge'
    );
    const ref_select = useRef();
    const ref = useRef();
    const ref_vector = useRef();
const dispatch = useDispatch()
const {i18n} = useTranslation();


   const handleClickLanguage = (lang) => {
      ref_select.current.style.display = "none";
      ref_vector.current.style.transform = "rotate(360deg)";
      localStorage.setItem('lang', lang)     
      setMode(false) 
      setUserLanguage(lang);
      dispatch(langChange(lang))

      i18n.changeLanguage(lang)
  };
  useEffect(() => {
   localStorage.setItem("lang", userLanguage);
   
   if (userLanguage === "ge") {
       ref.current.src = `${flag_ge}`;
   }
   if (userLanguage === "ru") {
       ref.current.src = `${flag_rus}`;
   }
   if (userLanguage === "en") {
       ref.current.src = `${flag_eng}`;
   }
}, [userLanguage]);


       useEffect(()=>{
              if(mode){
          ref_vector.current.style.transform = "rotate(180deg)"
          ref_select.current.style.display = "block"

              }               
              if(!mode){
          ref_vector.current.style.transform = "rotate(360deg)"
          ref_select.current.style.display = "none"

              }         
      },[mode])

  const handleClick = (e) => {
      setMode(!mode) 
      e.stopPropagation()  
  };

  function close() {
      if(!mode){
         ref_vector.current.style.transform = "rotate(360deg)"
          ref_select.current.style.display = "none"
      }  
      setMode(false)
  }

  useEffect(() => {
      window.addEventListener('click', close)
      return () => {
          window.removeEventListener("click", close);
      };
  }, [])



return  (   

<div>
     <div className={s.box} onClick={handleClick}>
                <img ref={ref} src={flag_ge} className={s.flag1}/>
                <img ref={ref_vector} src={vector} className={s.vector}/>
            </div>
            <div ref={ref_select} className={s.box_select}>
                <div className={s.select} onClick={() => handleClickLanguage("ge")}>
                    <div className={s.flag}>
                        <img src={flag_ge} className={s.flag1}/>
                    </div>
                    <div className={s.text}>ქართული</div>
                </div>

                <div className={s.select} onClick={() => handleClickLanguage("ru")}>
                    <div className={s.flag}>
                        <img src={flag_rus} className={s.flag1}/>
                    </div>
                    <div className={s.text}>Русский</div>
                </div>

                <div className={s.select} onClick={() => handleClickLanguage("en")}>
                    <div className={s.flag}>
                        <img src={flag_eng} className={s.flag1}/>
                    </div>
                    <div className={s.text}>English</div>
                </div>
            </div>
            </div>

 )
}
export default Lang;