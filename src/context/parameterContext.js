import { createContext, useState, useEffect } from "react"
import { collection, getDocs , doc, getDoc, setDoc} from 'firebase/firestore/lite';

import {auth, db} from '../firebase-config'


export const ParameterContext = createContext()

export function ParameterContextProvider(props){
  const [parameterState, setParameterState] = useState(false)
  const [timeSetting, setTimeSetting] = useState()

  const getTimeParameter = async () => {
    const collectionTime = collection(db , 'timeboard')
    const timeSnapshot = await getDocs(collectionTime)
    const timeList = timeSnapshot.docs.map(doc => doc.data())
    return timeList
  }

  return(
    <ParameterContext.Provider value={{parameterState,setParameterState, timeSetting, setTimeSetting, getTimeParameter}}>
      {props.children}
    </ParameterContext.Provider>
  )
}
