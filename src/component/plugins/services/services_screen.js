import React , {useContext} from "react"
import uuid from 'react-uuid';

import {ServicesContext} from "../../../context/servicesContext"
import ServicesList from "./services_list"

export default function ServicesScreen(){
  const {servicesZone} = useContext(ServicesContext)

  return(
    <div className="services_genre_screen">
      {servicesZone.map((element)=>(
        <div key={uuid()} className={element.class_screen}>
          <ServicesList type={element.type}/>
        </div>
      ))}
    </div>
  )
}
