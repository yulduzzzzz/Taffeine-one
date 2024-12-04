import React,{ useState} from 'react'
import style from './Btn.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Btn() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <div className={style.Btn} >
        <div className="container">
        <Button variant="primary"  className={style.tt}    onClick={handleShow}>
        Найти в аптеках
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Найти в аптеках</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <a href="https://t.me/arzonaptekabot"  className={style.link} >arzon аптека </a>
        </Modal.Body>
        <Modal.Body   >

            <a href="http://apteka999.uz/"  className={style.link} >аптека 366</a>
        </Modal.Body>
        <Modal.Footer>
      
        </Modal.Footer>
      </Modal>
        </div>
    </div>
  )
}

export default Btn