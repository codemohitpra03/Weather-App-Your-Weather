import React, { useState } from 'react'
import './Info.css'
import moment from 'moment'
import wind from '../../assets/wind.png'
import humidity from '../../assets/humidity.png'
import uv from '../../assets/uv.png'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'
import precipitation from '../../assets/precipitation.png'
import pressure from '../../assets/pressure.png'
import sunrise from '../../assets/sunrise.png'
import sunset from '../../assets/sunset.png'
import visibility from '../../assets/visibility.png'
import Today from '../Sections/Today'
import Weekly from '../Sections/Weekly'
import temperature from '../../assets/temperature.png'


const parseDate = (str) => {
    let info = {
        date : moment(str).format('Do'),
        day : moment(str).format('dddd'),
        month : moment(str).format('MMMM'),
        year : moment(str).format('YYYY'),
        time: moment(str).format('a'),
        hour: moment(str).format('h'),
        min: moment(str).format('mm'),
    }
    return info
}


const Info = ({city,response}) => {  
  const [date, setDate] = useState(parseDate(response.timelines.minutely[0].time))  
  
  
  console.log(response.timelines.hourly);
  return (
    <div className='weather-wrapper'>
        <div className='header'>
            <div>
              <div className='top'>{city}, {date.month} {date.year}</div>
              <div className='bottom'>{date.day}, {date.month} {date.date}, {date.year}</div>
            </div>
            <div className="temperature"> <img src={temperature} alt="" /><span>{response.timelines.minutely[0].values.temperature}&deg; Celsius</span></div>
            <div className="time-of-day"> {date.time==='pm'?<img src={moon} alt=""  />:<img src={sun} alt=""  />} </div>
        </div>
        
        <div className='work-area'>
          <hr />
          <div>
            <h4>Today's Overview</h4> 
            <div className='featured'>
              <div className="features">
                <img id="wind" src={wind} alt="" />
                  <div className='details'>
                    <span>Wind Speed</span> <br />
                    <div>{response.timelines.hourly[0].values.windSpeed} m/s</div>
                  </div>
              </div>
              <div className="features">
                <img id="humidity" src={humidity} alt="" />
                <div className='details'>
                  <span>Humidity</span> <br />
                  <div>{response.timelines.hourly[0].values.humidity} </div>
                </div>
              </div>
              <div className="features">
              <img id="uv" src={uv} alt="" />
                <div className='details'>
                  <span>UV Index</span> <br />
                  <div>{response.timelines.daily[0].values.uvIndexAvg} </div>
                </div>
              </div>
              <div className="features">
                <img id="precipitation" src={precipitation} alt="" />
                  <div className='details'>
                    <span>Precipitation Probability</span> <br />
                    <div>{response.timelines.hourly[0].values.precipitationProbability} </div>
                  </div>
              </div>
              <div className="features">
                <img id="visibility" src={visibility} alt="" />
                  <div className='details'>
                    <span>Visibility</span> <br />
                    <div>{response.timelines.daily[0].values.visibilityAvg} </div>
                  </div>
              </div>
              <div className="features">
                <img id="pressure" src={pressure} alt="" />
                  <div className='details'>
                    <span>Pressure</span> <br />
                    <div>{response.timelines.daily[0].values.pressureSurfaceLevelAvg} </div>
                  </div>
              </div>
              <div className="features">
                <img id="sunrise" src={sunrise} alt="" />
                  <div className='details'>
                    <span>Sun Rise</span> <br />
                    <div>{parseDate(response.timelines.daily[0].values.sunriseTime).hour +":" + parseDate(response.timelines.daily[0].values.sunriseTime).min} am </div>
                  </div>
              </div>
              <div className="features">
                <img id="sunset" src={sunset} alt="" />
                  <div className='details'>
                    <span>Sun Set</span> <br />
                    <div>{parseDate(response.timelines.daily[0].values.sunsetTime).hour +":" + parseDate(response.timelines.daily[0].values.sunsetTime).min} pm </div>
                  </div>
              </div>
            </div>
          </div>
          
          <div className='today'>
            <span id='today-header'>Todays forecast </span>
            
          
            <div className="today-inner"> 
              {
                response.timelines.hourly.map((e,index)=>{
                  console.log(e);
                  if(index<12)return <Today {...e}/>
                })
              }
            </div>
            
            
          </div>

          <div className="weekly">
            <span id='weekly-header'>Weekly's forecast</span>
            
            <div className="weekly-inner">
              {response.timelines.daily.map((e,index)=>{
                  
                  return <Weekly {...e}/>
                })}
            </div>
          
          </div>
        </div>

    </div>
    
  )
}

export default Info