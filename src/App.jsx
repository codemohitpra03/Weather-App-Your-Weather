import { useState } from 'react'

import Home from './Components/Home/Home'
import Weather from './Components/Weather/Weather'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Error from './Components/Error/Error';



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: `weather/`,
    element: <Weather/>,
  },
  {
    path: `error/`,
    element: <Error/>,
  }
]);


function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
