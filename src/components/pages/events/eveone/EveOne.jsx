import React from 'react'
import style from './EveOne.module.css'
function EveOne(props) {
  return (
    <div className={style.EveOne}      >
        <img src={props.img} alt=""   className={style.img}    width={350}   height={250}       />
        <h2 className={style.title} >{props.title}</h2>
        <p className={style.text} >{props.content}</p>
    </div>
  )
}

export default EveOne