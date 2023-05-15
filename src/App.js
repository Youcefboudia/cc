import React, { useEffect } from 'react';
import {
  createBrowserRouter as Router,
  RouterProvider
} from "react-router-dom";

import Home from './pages/Home';
import Sign from './pages/Sign_Up';
import Candidat from './pages/candidat';
import Home_pr from './pages/parts/Home_pr';
import Login from './pages/login';
import axios from 'axios'
const router = Router(

  [
    {
      path :'/login',
      element : <Login/>
    },
    {
      path :'/candidat',
      element : <Candidat/>
    },
    {
      path :'/Sign',
      element : <Sign/>
    },
    {
      path :'/',
      element : <Home_pr/>
    }
    ,
    {
      path :'/home',
      element : <Home_pr/>
    }
  ]
)
var resu = '';
function App() {
  // useEffect(()=>{
  //   axios.get('http://localhost:2000/').then( (res)=>{
  //     console.log(res.data);
  //   })
  // },[])

  return (
    <div className="App">
      <RouterProvider router={router}/>
      </div>
  );}

export default App 
