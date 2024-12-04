import React, { useState, useEffect } from 'react'
import style from './Events.module.css'
import axios from 'axios';
import EveOne from './eveone/EveOne'

function Event() {

  const [val, setVal] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/events").then((res) => {
      setVal(res.data.data);
    })
  },[]);
  return (
    <div className={style.Event} > 
 <div className={style.con}>
 <div className="container">
    <h1 className={style.title} >Мероприятия</h1>
    <p className={style.text} >Откройте для себя всемирные события Taffeine</p>
   <h1 className={style.ser} >Поиск событий по интересам</h1>
   {
    val.map((item,index)=>{
      return(
   <div className={style.box} key={index} >
  <EveOne key={index}
 img={item.url}
 title={item.title}
 content={item.content}
  />
   </div>
      )
    })
   }
  </div>
 </div>
    </div>
  )
}

export default Event