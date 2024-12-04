import React,{ useEffect, useState} from 'react'
import style from './Table.module.css'
import axios from 'axios';

function Table() {
    const [val, setVal] = useState([]);
    useEffect(() => {
      axios.get("https://admin.taffeine.com/api/home/product_composition").then((res) => {
        setVal(res.data.data);
      })
    },[]);
  return (
    <div className={style.Table} >
        <div className="container">
      
            <table border="3px"
        
            className={style.table}
            dangerouslySetInnerHTML={{ __html: val.content }}
          ></table>

        </div>
    </div>
  )
}

export default Table