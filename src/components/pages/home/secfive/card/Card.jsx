import React from 'react'
import style from './Card.module.css'
function Card(props) {
  return (
    <div className={style.Card} > 
<img  className={style.img}  src={props.img}   width={200}   height={300}       alt="" />
<h3 className={style.title}  >{props.title}</h3>
<p className={style.text}  >{props.content}</p>
    </div>
    
  )
}

export default Card;