import React from 'react'
import style from './SecEight.module.css'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';


function SecEight() {
  return (
    <div className={style.SecEight} >
        <div className="container">
            <h1 className={style.title}  >Часто задаваемые вопросы</h1>
        <Accordion     className={style.t}   defaultActiveKey="1" >
      <Accordion.Item   className={style.tt}     eventKey="1"     >
        <Accordion.Header  className={style.tit} >Что лучше, напитки с коффеином или таблетки?</Accordion.Header>
        <Accordion.Body  className={style.text} >
        Напитки приятные на вкус, имеют в составе сахар, много воды. Эти качества делают их более привлекательными, в тоже время, не стоит употреблять энергетики ради вкуса, или утоления жажды. Таблетки с коффеином употребляют более ответственно и осознанно, для увеличения физической или умственной эффективности. Вероятность привыкания уменьшается в несколько раз.
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
        </div>
    </div>
  )
}

export default SecEight