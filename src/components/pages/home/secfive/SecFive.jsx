import React, { useState, useEffect } from 'react'
import style from './SecFive.module.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from './card/Card'
import axios from 'axios';
function SecFive() {
    const [val,setVal] = useState([]);
    useEffect(()=>{
        axios.get("https://admin.taffeine.com/api/stati").then((res)=>{
            setVal(res.data.data)
        });
    },[]);
  return (
    <div className="slide" >
   <div className="container">
            
            <h1 className={style.tit} >Статьи</h1>
            <OwlCarousel  key={`carousel_${val.length ? val.length : 0}`}    className='owl-theme' item={3} loop margin={12} nav
            autoplay={true}
            autoplayTimeout={5000}
            >
{
    val.map((item, index) => {
        return (
            <Card  key={index}
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

export default SecFive