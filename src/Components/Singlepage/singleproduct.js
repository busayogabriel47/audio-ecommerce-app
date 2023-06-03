import '../Singlepage/Single.css'
import '../Home/Home.css';
import { Link } from 'react-router-dom';

import React from 'react'

function singleproduct() {
  return (

    <div className='whiteBg'>
      <div className='container'>
          <div className='row'>
              <div className='back2Home col-12 my-5'>
                  <p><Link to='/'>Go Back</Link></p>
              </div>
              <div className='col-12 col-md-6 single1'>
                  <img src={require('../../assets/xx59.png')} width="100%"/>
              </div>
              <div className='col-12 col-md-6 product-desc textDark'>
                <small>NEW PRODUCT</small>
                <h1>XX99 MARK II <br/>HEADPHONES
                </h1>

                <p>Experience natural, lifelike audio and exceptional
                  <br/> build quility made for the passionate music <br/>
                  enthusiast
                </p>

              <p>$2,999</p>
              <button className='addCartBtn'><i class="fa-sharp fa-solid fa-minus"></i></button>
                <button className='addCartBtn'>1</button>
                <button className='addCartBtn'><i class="fa-sharp fa-solid fa-plus"></i></button>
                <Link to="/checkout" className='productBtn mx-3'>SEE PRODUCT</Link>
            </div>
          </div>

      {/*-------------Product-description------------*/}
        <div className='row'>

              <div className='col-12 col-md-6 my-5 features'>
                   
                    <h2 className='my-5'>FEATURES</h2>

                    <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver
                      deliver superior comfort for those who like to enjoy endless listening. it includes intuitive
                      controls designed for any situation. Whether you're taking a business call or just in your own
                      personal space, the auto on/off and pause features ensure that you'll never miss a beat.
                    </p>

                    <p>The advanced Active Noise Cancellation with buit-in equilizer allow you to experience your audio world on your terms.
                      It lets you enjoy your audio in paeace, but quickly interact with your surroundings when you need to need to.
                      Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life.
                      the xx99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
                    </p>
                </div>

                <div className='col-12 col-md-6 my-5 inTheInbox'>
                    <div>

                      <h2 className='my-5'>IN THE BOX</h2>
                      <ul>
                          <li>Headphone Unit</li>
                          <li>Replacement Earcups</li>
                          <li>User Manual</li>
                          <li>3.5mm 5m Audio Cable</li>
                          <li>Travel Bag</li>
                      </ul>
                      
                    </div>
                    
                </div>
        </div>
          

      {/*-------------Product-description------------*/}

        <div className='row'>
            <div class="col-12 col-md-5 me-4 mb-5">
                <div className='row'>
                    <div className='col-12 sample mb-4'>
                        
                    </div>
                    <div className='col-12 sample2'>
                        
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 sample3">
                
            </div>

        </div>


        {/* Related products*/}

        <div className='row'>
                <div className='col-12 text-center'>
                    <h1>YOU MAY ALSO LIKE</h1>
                </div>
                <div className='col-12 col-md-4 text-center mb-5'>
                    <div className='related1 me-2 text-center'>
                      <img src={require('../../assets/headset1new.png')} width="40%"/>
                    </div>
                    <p className='my-4'>XX99 MARK I</p>
                    <button className='productBtn'>SEE PRODUCT</button>
                </div>
                <div className='col-12 col-md-4 text-center mb-5'>
                    <div className='related1 me-2'>
                        <img src={require('../../assets/xx99.png')} width="60%"/>
                    </div>
                    <p className='my-4'>XX59</p>
                    <button className='productBtn'>SEE PRODUCT</button>
                </div>
                <div className='col-12 col-md-4 text-center mb-5'>
                    <div className='related1 me-2'>
                        <img src={require('../../assets/speakernew.png')} width="40%"/>
                    </div>
                    <p className='my-4'>ZX9 SPEAKER</p>
                    <button className='productBtn'>SEE PRODUCT</button>
                </div>
        </div>


        <div className='row product1'>
                <div className='col-12 col-md-4 mt-5'>
                    <div className='product text-center'>
                        <img src={require('../../assets/headset1new.png')} alt="headset" width="110px"/>
                        <h5 className='my-3'>HEADPHONE</h5>
                        <span>SHOP <i class="fa-solid fa-chevron-right"></i></span>
                    </div>
                </div>
                <div className='col-12 col-md-4 mt-5'>
                    <div className='product text-center'>
                        <img src={require('../../assets/speakernew.png')} alt="headset" width="110px"/>
                        <h5 className='my-3'>SPEAKERS</h5>
                        <span>SHOP <i class="fa-solid fa-chevron-right"></i></span>
                    </div>
                </div>
                <div className='col-12 col-md-4 mt-5'>
                    <div className='product text-center'>
                        <img src={require('../../assets/earbudnew.png')} alt="headset" width="110px"/>
                        <h5 className='my-3'>HEADPHONES</h5>
                        <span>SHOP <i class="fa-solid fa-chevron-right"></i></span>
                    </div>
                </div>
            </div>

            <div className='earPhone row'>
                  <div className="col-12 col-md-6 earPhone1 mb-5">
                      <h1>BRINGING YOU THE <br/>
                        <span id='best'>BEST</span> AUDIO GEAR
                      </h1>
                      <p>Located at the heart of new YouCity, 
                        Audiophile is the premier for high end headphones, earphones, speakers, and audio accessories. We have large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantanstic people who make Audiophile the best place to buy your portable audio equipment</p>
                  </div>
                  <div className="col-12 col-md-6 audioGear mb-5">     
                  
                  </div>
            </div> 
            
        </div>

      </div>
  )
}

export default singleproduct