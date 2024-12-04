import React from 'react'
import style from './Dani.module.css'
function Dani(props) {
  return (
    <div className={style.Dani} >
        <div className="container">
          <h1 className={style.title} >{props.title}</h1>
        </div>
    </div>
  )
}

export default Dani