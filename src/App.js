import React, {useState, useEffect, useCallback} from 'react'
import {Routes, Route, useLocation, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Singleproduct from './Components/Singlepage/singleproduct';


import Checkout from './Components/Checkout/Checkout';
import Auth from './Components/auth/auth';
import Login from './Components/auth/LoginAuth';
import UserProfile from './Components/Profile/Profile';



function App() {



  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/single' element={<Singleproduct/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<UserProfile/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
