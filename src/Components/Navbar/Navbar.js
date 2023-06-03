import React, { useCallback, useEffect, useState } from 'react'
import '../Navbar/Navbar.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Navbar() { 


  const user = useSelector((state)=> state.authentication.user);
  const dispatch = useDispatch();

  return (
    <header>
        <nav class="navbar navbar-expand-lg">
        <div class="container navBorder">
            <a class="navbar-brand text-white" href="#">audiophile</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link text-white" to="/">HOME</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link text-white" to="/single">HEADPHONES</Link>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href='#'>SPEAKERS</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href='#'>EARPHONES</a>
                </li>
            </ul>
            {!user ? (
              //If no user show the sign in button 
              <div className="d-flex text-right">
              <Link className='sign_in' to={"/login"}>SIGN IN</Link>
              </div>
            ) : (
              <div className="d-flex text-right">
              <ul className='mx-3'>
                  <li>
                      <Link class="nav-link text-white" to={"/profile"}>{user ? user.username: null}</Link>
                  </li>
              </ul>

              <Link className='sign_in' to={"/login"} >SIGN OUT</Link>
              </div>
            )
    
            }
             
            
            <div class="d-flex" role="search">
              <Link to='/auth'><i class="fa text-white fa-cart-shopping"></i></Link>
            </div>
            </div>
        </div>
        </nav>
    </header>
  )
}

export default Navbar