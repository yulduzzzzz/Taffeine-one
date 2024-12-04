import React,{useState,useEffect} from 'react'
import style from './SecThree.module.css'
import axios from 'axios';
function SecThree() {
    const [val, setVal] = useState({});
useEffect(()=>{
    axios.get("https://admin.taffeine.com/api/home/about_product").then((res)=>{
        setVal(res.data.data);
    })
},[]);

  return (
    <div className="container">
        <div className={style.SecThree} >
      <div className={style.box}>
        <h1 className={style.title} >{val.title}</h1>
        <p className={style.text}  dangerouslySetInnerHTML={{__html:val.content}}   ></p>
        <button  className={style.btn} >
            <a  className={style.link} href="https://taffeine.com/product">Подробно</a>
        </button>
      </div>

      <div className={style.box_two}>
        <img src={val.img}   className={style.img} alt="" />
      </div>
        </div>
    </div>
  )
}

export default SecThree