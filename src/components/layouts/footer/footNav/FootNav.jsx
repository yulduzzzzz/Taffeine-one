import React,{useEffect, useState} from 'react'
import style from './FootNav.module.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom'
function FootNav() {
    const [val, setVal] = useState([]);
useEffect(()=>{
    axios.get("https://admin.taffeine.com/api/menu").then((res)=>{
        setVal(res.data.data);
    })
},[]);
  return (
    <div className={style.FootNav} >
        <div className="container">
<div className={style.box}>
  <ul className={style.item} >
    {
      val.map((item,index)=>{
        return(
          <li key={index} className={style.list} >
            <NavLink to={item.slug} className={style.link} >{item.title}</NavLink>
          </li>
        )
      })
    }
  </ul>
</div>
       
        </div>
    </div>
  )
}

export default FootNav