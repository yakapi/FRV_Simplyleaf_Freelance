import React, {useContext, useEffect} from 'react'
import {ParameterContext} from "../../../context/parameterContext"
import ParameterLoader from './parametre_loader'
import TimeboardCard from './timeboard_card'

export default function Horaire(){
  const {parameterState, getTimeParameter, setTimeSetting, setParameterState} = useContext(ParameterContext)
  const TimeParameterLoader = async ()=>{
    try {
     const cred = await getTimeParameter()
     setTimeSetting(cred)
     setParameterState(true)
    } catch (e) {

    }
  }
  useEffect(()=>{
    TimeParameterLoader()
  },[])
  return(
    <div>
      <h2 className="horaire_title">Horaire & Jour de disponibilité</h2>
        <p className="horaire_instruction">Sélectionner les jours ou vous êtes en activé pour renseigné les horaires</p>
      <div className="timeboard_container">
        <div className="timeboard_side">
          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="0"/> : <ParameterLoader/>}
          </div>
          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="2"/> : <ParameterLoader/>}
          </div>
          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="4"/> : <ParameterLoader/>}
          </div>
          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="6"/> : <ParameterLoader/>}
          </div>
        </div>
        <div className="timeboard_side">
          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="1"/> : <ParameterLoader/>}
          </div>

          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="3"/> : <ParameterLoader/>}
          </div>
          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="5"/> : <ParameterLoader/>}
          </div>
        </div>

      </div>
    </div>
  )
}
