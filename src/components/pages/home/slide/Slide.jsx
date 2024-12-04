import React from 'react'
import style from './Slide.module.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
function Slide() {

    const [val, setVal] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://admin.taffeine.com/api/home/banner").then((res) => {
      setVal(res.data.data);
    });
  }, []);
  return (
    <div className={style.Slide}  >
      <div className="b">
      <OwlCarousel  key={`carousel_${val.length ? val.length : 0}`}     className='owl-theme' items={1} loop nav dots={false}   >


{val.map((item, index) => {
   return (
     <div className={style.back}    key={index}
     style={{ backgroundImage:   `url(${item.url})` }}  >
       <div
     
       className={style.card}
     >
       <div className="container">
         <h1 className={style.title}>{item.title}</h1>
         <p className={style.text}>{item.short_content}</p>
         <button type="button"  className={style.btn} >
             <a href="https://taffeine.com/view/dostavaj-lyzhi-s-balkona" className={style.link}  >Узнать больше</a>
         </button>
       </div>
     </div>
     </div>
   );
 })}

</OwlCarousel>
      </div>
    </div>
  )
}

export default Slide