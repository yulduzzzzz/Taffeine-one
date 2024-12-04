import React from 'react'

import style from './FootMap.module.css'
import {YMaps, Map, Placemark} from "react-yandex-map";
function FootMap() {
  return (
    <div className={style.FootMap} >
       
        
<YMaps>
    <Map defaultState={{
    center: [55.751574, 37.573856],
    zoom: 5
  }}>
      <Placemark geometry={[55.684758, 37.738521]} />
    </Map>
  </YMaps>
    </div>
  )
}

export default FootMap