import React, { useState, useEffect }from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [val, setVal] = useState([]);
useEffect(()=>{
    axios.get("https://admin.taffeine.com/api/menu").then((res)=>{
        setVal(res.data.data);
    })
},[]);


  return (
  <div className={style.cont}>
     <div className={style.Navbar}        >
      
      <div className="container">
   <div className={style.content}>
      <NavLink to='/' className={style.logo}  >
          <img  className={style.logo}  src="https://taffeine.com/_nuxt/img/logo.6335003.svg" alt="" />
      </NavLink>
      <ul className={style.item} >
          {
              val.map((item, index)=>{
                  return(
                      <li key={index}  className={style.list} >
                          <NavLink to={item.slug} className={style.link} >{item.title}</NavLink>
                      </li>
                  );
               })}
      </ul>
      <div className={style.btn_box}>
       

 <button  onClick={handleShow} className={style.btn_buy}  >Купить Онлайн</button>

    <Modal show={show}   className={style.modal}  onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Выбрать</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <a href="https://uzum.uz/ru/product/Taffein-294782"  className={style.linkk}  >Uzum Market</a>
      </Modal.Body>
      <Modal.Footer>
      
      </Modal.Footer>
    </Modal>






       
          <button className={style.btn_one} >
              <img  className={style.img}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAEZSURBVHja1JYxTkMxDIa/pAGqvkq0M2Jl4BZci50DMXIAjsHUgQEJ2kJf4cWxGehTIzYkZ8BTnMFf8tuOE8yMlhZpbM0BAUjAFDhxjp2BzwTMzeytyelDWEaga6hQF4HUopIOMVOsnBYAmgMSwM3tA1cXS9a7wSX4ojvl6XlzBIgomz6z7bNX9SBSjoAsynaf2e6dADEwlAowlMLqZecnUZ+ZTrSSKAtCRNUn2VIMMakkKoYGwyk+qkauq+j+8Y6Zgb1/+ORg3tGnCdcjQEUIBEzVB6CK5uoGJgJhAk4AimJUSVYpkCJxNvNqY6wq06xSeD00xp+nif3yOez9rHMAzoFLYOH8HK2B1TjRzka5HE2Ar/DvfxXfAwAeSZOQlTRuTwAAAABJRU5ErkJggg==" alt="" />
              Русский</button>
      </div>
   </div>
      </div>
      
  </div>
  </div>
  )
}

export default Navbar