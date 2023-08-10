import React, { useEffect } from 'react'

import './Weather.css'
import icon from '../../assets/icon.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import History from '@mui/icons-material/YoutubeSearchedFor';
import Map from '@mui/icons-material/Map';
import Back from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

import {
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from 'react-router-dom';
import { useState } from 'react';
import Info from '../Info/Info';
import Shimmer from '../Shimmer/Shimmer';



function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}


const Weather = () => {
  const [response, setResponse] = useState({})
  const location = useLocation();
  const navigate = useNavigate();
  const getWeatherData = async () =>{
    if(location.lat){

      const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${location.lat},${location.long}&apikey=VbNxpt6F5VfeBv9qGPRKqFWrIyGtK7Mo`)
      const json = await response.json();
      console.log(json); 
      if(json.code){
        navigate("/error")
      }
      
      setResponse(json)
      return 
    }
    const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${location.state.city}&apikey=VbNxpt6F5VfeBv9qGPRKqFWrIyGtK7Mo`)
    const json = await response.json();
    console.log(json); 
    if(json.code){
      navigate("/error")
    }
    
    setResponse(json)
    
  }

  


  useEffect(() => {
    
    getWeatherData();
    console.log(response);
  }, [])

  
  return (
    
      
    
      isEmpty(response)?<Shimmer/>:(<div className='wrapper'>
      <div className="side-bar">
        <div className="side-inner">
          <div className="side-logo">
            {/* logo */}
            <img className='logo-icon' src={icon} alt="" />
            <h3 className='city'>Your Weather</h3>
          </div>
          
          <ul className='list'>
            <li><DashboardIcon className='icon'/><span className='label'>Dashboard</span></li>
          
            <li><History className='icon'/><span className='label'>Historical</span></li>
          
            <li ><Map className='icon'/><span className='label'>Map</span></li>
          </ul>

        </div>
        <Link to="/">
          <div className="go-back" ><Back className='icon'/>Go back<span className="label"></span></div>
        </Link>
      </div>

      
      
      <Info city={location.state.city?location.state.city:"Your City"} response={response}/>
      
      

    </div>)
  
  )
}

export default Weather