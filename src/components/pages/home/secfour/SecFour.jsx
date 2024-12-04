import React,{useState, useEffect} from 'react'
import style from './SecFour.module.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
function SecFour() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const [val, setVal] = useState({});
    useEffect(()=>{
        axios.get("https://admin.taffeine.com/api/home/product_composition").then((res)=>{
            setVal(res.data.data);
        })
    },[]);



  return (
    <div className="container">
        <h1  className={style.title}  >{val.title}</h1>
        <div  className={style.SecFour} > 

<img src={val.img}  className={style.img}  alt="" />
<div className={style.box}>


<table border="2px"
        
            className={style.table}
            dangerouslySetInnerHTML={{ __html: val.content }}
          ></table>







<div className={style.son}>
<div className={style.ins}>
    
    <button  onClick={handleShow} className={style.btn_buy}  >Купить Онлайн</button>
 
 <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
     <Modal.Title>Выбрать</Modal.Title>
   </Modal.Header>
   <Modal.Body>
       <a href="https://uzum.uz/ru/product/Taffein-294782"  className={style.linkk}  >Uzum Market</a>
   </Modal.Body>
   <Modal.Footer>
   
   </Modal.Footer>
 </Modal>
 
 </div>
 
 <div className={style.ins}>
     
    <button  onClick={handleShow} className={style.btn_buyy}  >Купить Онлайн</button>
 
 <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
     <Modal.Title>Выбрать</Modal.Title>
   </Modal.Header>
   <Modal.Body>
       <a href="https://t.me/arzonaptekabot"  className={style.linkk}  >O'rzon Оптека</a>
   </Modal.Body>
   
   

   
   <Modal.Footer>
   
   </Modal.Footer>
 </Modal>

 </div>
</div>

</div>
 </div>
    </div>
  )
}

export default SecFour