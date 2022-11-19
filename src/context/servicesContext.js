import { createContext, useState, useEffect } from "react"
import { collection, getDocs , doc, getDoc, setDoc, updateDoc} from 'firebase/firestore/lite';

import {auth, db} from '../firebase-config'


export const ServicesContext = createContext()

export function ServicesContextProvider(props){
  const [servicesZone, setServicesZone] = useState([{
    type: "Femme",
    class_board: "services_genre_choice selected_genre_choice",
    class_screen: "services_screen_choice selected_screen_choice"
  },{
    type: "Homme",
    class_board: "services_genre_choice",
    class_screen: "services_screen_choice"
  },{
    type: "Enfant",
    class_board: "services_genre_choice",
    class_screen: "services_screen_choice"

  }])
  const selectType = (e) => {
    let newService = servicesZone
    for (var i = 0; i < newService.length; i++) {
      if (e.target.innerHTML == newService[i].type) {
        newService[i].class_board = "services_genre_choice selected_genre_choice"
        newService[i].class_screen = "services_screen_choice selected_screen_choice"
      }else {
        newService[i].class_board = "services_genre_choice"
        newService[i].class_screen = "services_screen_choice"
      }
    }
    setServicesZone(newService)
    console.log(servicesZone);
  }

  return(
    <ServicesContext.Provider value={{servicesZone, setServicesZone, selectType}}>
      {props.children}
    </ServicesContext.Provider>
  )
}
