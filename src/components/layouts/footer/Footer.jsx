import React from 'react'
import style from './Footer.module.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import tel from '../../../../src/assets/images/tel.svg'
import mass from '../../../../src/assets/images/mass.svg'
import loc from '../../../../src/assets/images/loc.svg'
import FootNav from './footNav/FootNav'
import FootMap from './footmap/FootMap'
function Footer() {





  
  return (
    <div className={style.Footer} >
      <div className="container">
        <div className={style.box}>
          <h2 className={style.title} >Будьте в курсе новостей </h2>
          <div className={style.inp_box}>
            <label htmlFor="">
              <input type="text" name="" id=""  className={style.inp}    placeholder='email'  />
            </label>
            <button className={style.btn}  >Отправить</button>
          </div>
        </div>
        <div className={style.line}></div>
   <div className={style.son}>
<div className="">
<div className={style.one}> 
  <img src={tel} alt="" />
  <h3 className={style.teltit} >+998901151333</h3>
</div>
<div className={style.one}>
  <img src={mass} alt="" />
  <h3 className={style.teltit} >info@sightex.uz</h3>
</div>
<div className={style.one}>
  <img src={loc} alt="" />
  <h3 className={style.teltit} >Massiv Yalong'och 119A, Toshkent</h3>
</div>
</div>
 <FootNav/>
 <FootMap/>
   </div>
   <div className={style.liner}></div>
  <div className={style.end}>
  <NavLink to='/' className={style.logo}  >
          <img  className={style.logo}  src="https://taffeine.com/_nuxt/img/logo.6335003.svg" alt="" />
      </NavLink>
      <p className={style.tex} >© Sightex LLC 2022 / Все права защищены</p>
  </div>
      </div>
    </div>
  )
}

export default Footer