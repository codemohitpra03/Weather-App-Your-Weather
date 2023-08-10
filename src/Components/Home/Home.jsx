import React from 'react'
import './Home.css'
import bg from '../../assets/background-home.jpg'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import City from '@mui/icons-material/FmdGood';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Home = () => {
  const [city, setCity] = useState("")
  const [open, setOpen] = React.useState(false); //new join
  const navigate = useNavigate();

  const handleCity = () =>{
    if(city===''){
      setOpen(true);
      return
    }
    const redirect = () =>{
      navigate("/weather", {
        state:{
          city
        }
      });
    }
    redirect();
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleInputEnter = (e) => {
      if (e.code === 'Enter') {
          handleCity();
      }
  };

  const handleDevice = () =>{
    let lat,long
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      console.log(lat,long);
    });
    const redirect = () =>{
      navigate("/weather", {
        state:{
          lat,
          long
        }
      });
    }
    redirect();
  }

  const handleChange = (e) =>{
    setCity(e.target.value)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }  
    setOpen(false);
    
};


  return (
    <div className='mainWrap'>
      <Snackbar anchorOrigin={{ vertical:'top', horizontal:'right' }} open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          Please enter City
          </Alert>
      </Snackbar>
      <div className="aside">
        <img src={bg} className='home-bg' alt="" />
      </div>
      <div className='right'>

        <div className='heading'>
          <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5unPlCpMgIAh21P8lh8DSP5OqjLROFd0JXaJira16&s" alt="" />
          <span className="title">Your weather</span>
        </div>

        <div className="form">
          <div className='input'>
          
          <City />
          <TextField
            hiddenLabel
            id="input-city"
            variant="filled"
            size="small"
            placeholder='City'
            value={city}
            onChange={handleChange}
            onKeyUp={handleInputEnter}
          />
          </div>
          <div className="city">
            <Button onClick={handleCity} variant="contained">Check Weather</Button>
          </div>
          <h3>Or</h3>
          <div className="device">
            <Button onClick={handleDevice} variant="outlined">Get device Location</Button>
          </div>
    
        </div>

      </div>
    </div>
  )
}

export default Home