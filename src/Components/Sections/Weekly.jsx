import React from 'react'
import moment from 'moment'
import {refer} from '../../filereference.js'
import Img from '../Img/Img.jsx'
import Rain from '@mui/icons-material/Thunderstorm';
import Temperature from '@mui/icons-material/Thermostat';
const parseDate = (str) => {
    let info = {
        day: moment(str).format('dddd'),
        
    }
    return info
}

const Weekly = ({time,values}) => {
    
    const x=values.weatherCodeMax+'0'
  return (
    <div className="weekly-item">
        <h3>{parseDate(time).day.substring(0,3)} </h3>
        <span><Img name={refer[x]}/></span>
        
        <div><Temperature/>{values.temperatureAvg}</div>
        <div><Rain sx={{marginRight:"10px"}}/>{values.precipitationProbabilityMax}%</div>
        
        
    </div>
  )
}

export default Weekly