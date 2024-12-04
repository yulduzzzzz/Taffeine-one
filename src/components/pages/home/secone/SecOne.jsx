import React, { useState, useEffect} from 'react'
import style from './SecOne.module.css'
import axios from 'axios';
function SecOne() {
const [val, setVal] = useState([]);
  useEffect(() => {
      axios.get("https://admin.taffeine.com/api/home/what_product").then((res)=>{
setVal(res.data.data)
      });
  },[]);
  return (
    <div className={style.SecOne} >
        <div className="container">
            <h1 className={style.title} >Что уникального?</h1>
            <div className={style.rows}>
{val.map((item, index)=>{
    return(
        <div key={index} className={style.cols}>
        <div className={style.items}>
          <div className={style.photo}>
            <img src={item.url} alt="" />
          </div>
          <div className={style.box}>
            <h2 className={style.titleTwo}>{item.title} </h2>
            <p className={style.text}>{item.short_content} </p>
          </div>
        </div>
      </div>
    )
})
    
}
            </div>
        </div>
    </div>
  )
}

export default SecOne