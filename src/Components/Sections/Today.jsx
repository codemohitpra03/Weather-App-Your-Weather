import React from 'react'
import moment from 'moment'
import {refer} from '../../filereference.js'
import Img from '../Img/Img.jsx'
const parseDate = (str) => {
    let info = {
        hour: moment(str).format('h'),
        time: moment(str).format('a')
    }
    return info
}

const Today = ({time,values}) => {
    // console.log(values);
    console.log(refer);
    const x=values.weatherCode+(parseDate(time).time==='am'?'0':'1')
  return (
    <div className="today-item">
        <h3>{parseDate(time).hour}:00 {parseDate(time).time}</h3>
        
        <span><Img name={refer[x]}/></span>
        <div>{values.temperature}</div>
    </div>
  )
}

export default Today