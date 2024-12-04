import React from 'react'
import style from './SecSix.module.css'
import OwlTwo from './owltwo/OwlTwo'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect } from 'react';
import axios from 'axios';

function SecSix() {
    const [val, setVal] = React.useState([]);
    useEffect(()=>{
        axios.get("https://admin.taffeine.com/api/events").then((res)=>{
            setVal(res.data.data)
        });
    },[]);
  return (
    <div className='owl' > 
    <div className="container">
        <h1 className={style.tit} >Мероприятия</h1>
        <OwlCarousel  key={`carousel_${val.length ? val.length : 0}`}    className='owl-theme' 
        item={3} loop margin={12} nav
        autoplay={true}
        autoplayTimeout={5000}
        dots={false}
        >

{
    val.map((item, index)=>{
        return(
            <OwlTwo key={index}
            img={item.url}
            title={item.title}
            content={item.content}
             />
        );
    })
}
           
           
        </OwlCarousel>
    </div>
    </div>
  )
}

export default SecSix