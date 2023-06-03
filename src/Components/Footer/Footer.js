import '../Footer/Footer.css';

import React from 'react'

function Footer() {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 text-white bottom'>
                <a class="navbar-brand text-white" href="#">audiophile</a>
                <p>Audiophile is an all in one stop to fulfill your audio needs. 
                    We're a small team of music lovers and sound specialists who 
                    are devoted to helping you get the most out of personal audio. 
                    Come and visit our demo facility - We're open 7 days a week</p>

                  <p>Copyright 2021. All Rights Reserved</p>
                </div>

                <div className='col-12 col-md-6 text-white bottom'>
                    <div id='bottomList'>
                      <ul className='siteMap'>
                        <li>HOME</li>
                        <li>HEADPHONES</li>
                        <li>SPEAKERS</li>
                        <li>EARPHONES</li>
                      </ul>
                    </div>

                    <div className='socials'>
                      <i class="fa-brands fa-facebook"></i>
                      <i class="fa-brands fa-twitter"></i>
                      <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer