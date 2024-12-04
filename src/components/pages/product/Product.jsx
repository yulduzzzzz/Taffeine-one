import React,{ useEffect, useState } from 'react'
import style from './Product.module.css'
import Table from './table/Table'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Btn from './btn/Btn'
function Product() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [val, setVal] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/home/product").then((res) => {
      setVal(res.data.data);
    })
  },[]);
  return (
    <div className={style.Product} >
 <div className={style.box}>
 <h1 className={style.title} >Продукт</h1>
 <p className={style.text} >
 Откройте для себя всемирные события Taffeine
 </p>
 </div>
<div className="container">
<div className={style.two}>
<img src={val.img}  className={style.img} alt="" />
<p  dangerouslySetInnerHTML={{ __html: val.content }}    className={style.tex}  ></p>
</div>
<div className={style.boxx}>
<Table/>

<div className={style.btn}>
<div className={style.boxone}>
<Button variant="primary"  className={style.tt}       onClick={handleShow}>
       Купить онлайн
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Выбрать</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <a className={style.link}   href="https://uzum.uz/ru/product/Taffein-294782">Uzum market</a>
        </Modal.Body>
        <Modal.Footer>
      
        </Modal.Footer>
      </Modal>
</div>
<div className="">
  <Btn/>
</div>
</div>
</div>
</div>

    </div>
  )
}

export default Product