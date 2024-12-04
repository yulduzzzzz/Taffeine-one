import React,{useEffect, useState} from 'react'
import style from './Contact.module.css'
import axios from 'axios';

function Contact() {

    const [val, setVal] = useState([]);
    useEffect(()=>{
        axios.get("https://admin.taffeine.com/api/contact").then((res)=>{
            setVal(res.data.data);
        })
    },[]);

  return (
    <div  className={style.Contact} > 
 <div className={style.con}>
 <div className={style.box}>
<h1 className={style.title}  >Контакт</h1>
<p className={style.text} >Откройте для себя всемирные события Taffeine

</p>

</div>
 </div>

{
    val.map((item, index)=>{
        return(
     <div className={style.big}  key={index} >
      <div className="container">
      <div className={style.card}>
     
     <h1 className={style.tit} >{item.title}</h1>
     </div>
      </div>
    
     </div>
        )
    })
}


     </div>
  )
}

export default Contact