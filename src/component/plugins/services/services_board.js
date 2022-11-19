import React , {useContext} from "react"
import uuid from 'react-uuid';

import {ServicesContext} from "../../../context/servicesContext"


export default function ServicesBoard(){
  const {servicesZone, setServicesZone, selectType} = useContext(ServicesContext)


  return(
    <div className="services_genre_board">
      {servicesZone.map((element)=>(
        <p onClick={selectType} key={uuid()} className={element.class_board}>{element.type}</p>
      ))}
    </div>
  )
}
