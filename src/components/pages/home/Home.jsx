import React from 'react'
import style from './Home.module.css'
import SecThree from './secthree/SecThree'
import SecFour from './secfour/SecFour'
import SecFive from './secfive/SecFive'
import SecSix from './secsix/SecSix'
import SecEight from './seceight/SecEight'
import Slide from './slide/Slide'
import SecOne from './secone/SecOne'
function Home() {


  

  
  return (
    <div className={style.Home} >
     

     <Slide/>
     <SecOne/>
<SecThree/>


<SecFour/>
<SecFive/>
<SecSix/>
      <SecEight/>
    </div>
  )
}

export default Home