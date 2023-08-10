import Skeleton from '@mui/material/Skeleton';

import React from 'react'

const Shimmer = () => {
  return (
    <div style={{display:"flex"}}>
        
      <div style={{margin:"10px"}}><Skeleton variant="rounded" width={210} sx={{height:"100vh"}} /></div>
      <div style={{margin:"10px"}}>
        <div style={{margin:"3px 0 10px 0"}}><Skeleton variant="rounded" width={1020} sx={{height:"20vh"}} /> </div>
        <Skeleton variant="rounded" width={1020} sx={{height:"80vh"}} /> 
    </div>
    </div>
  )
}

export default Shimmer