import React from 'react'
import style from './OwlTwo.module.css'
function OwlTwo(props) {
  return (
    <div className={style.OwlTwo} >
        <img src={props.img} className={style.img}  width={200}   height={300}  alt="" />
        <h2  className={style.title} >{props.title}</h2>
        <p className={style.text} >{props.content}</p>
    </div>
  )
}

export default OwlTwo