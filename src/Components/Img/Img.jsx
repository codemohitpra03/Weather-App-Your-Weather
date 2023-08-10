import React from 'react'
// import xx from '../assets/icons/'

const Img = ({name}) => {
    const x='src\\assets\\icons\\'
    // const Im = require(`../assets/icons/${name}`).ReactComponent;
    // console.log(name);
    return (
    <img src={x+ name} alt={name} />
  )
}

export default Img