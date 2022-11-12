import React , {useContext, useState} from 'react'
import {ParameterContext} from "../../../context/parameterContext"
import TimeView from "./time_view"

export default function TimeboardCard({nb}){
  const {timeSetting} = useContext(ParameterContext)
  const [timeBoardState, setTimeBoardState] = useState(false)
  let pos = parseInt(nb)
  const toggleDay = (e) => {
    // e.preventDefault()
    console.log(e.target.checked);
    console.log(e);
    if (e.target.checked) {
      setTimeBoardState(true)
    }else {
      setTimeBoardState(false)
    }

  }
  return(
    <div className="timecard_box">
      <div  className="timeboard_box">
        <h2>{timeSetting[pos].name}</h2>
        <div className="onOff">
          <label className="switch">
            <input onClick={toggleDay} type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      {timeBoardState ? <TimeView nb={pos} /> : ""}
    </div>
  )
}
