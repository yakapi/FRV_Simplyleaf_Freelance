import { createContext, useState, useEffect } from "react"
import { collection, getDocs , doc, getDoc, setDoc, updateDoc} from 'firebase/firestore/lite';

import {auth, db} from '../firebase-config'


export const ParameterContext = createContext()

export function ParameterContextProvider(props){
  const [parameterState, setParameterState] = useState(false)
  const [timeSetting, setTimeSetting] = useState()
  const [modalTimeState, setModalTimeState] = useState(false)

  const updateTimeParameter = async (id, objt) =>{
    try {
      const time = doc(db, 'timeboard', id)
      await updateDoc(time, "state", objt.state)
      await updateDoc(time, "timeOne", objt.timeOne)
      await updateDoc(time, "timeTwo", objt.timeTwo)

    } catch (e) {
    }
  }

  const getTimeParameter = async () => {
    const collectionTime = collection(db , 'timeboard')
    const timeSnapshot = await getDocs(collectionTime)
    const timeList = timeSnapshot.docs.map(doc => doc.data())
    return timeList
  }

  return(
    <ParameterContext.Provider value={{modalTimeState, setModalTimeState, updateTimeParameter, parameterState,setParameterState, timeSetting, setTimeSetting, getTimeParameter}}>
      {props.children}
    </ParameterContext.Provider>
  )
}
