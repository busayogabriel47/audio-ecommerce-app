import React from 'react';
import '../Home/Home.css'



function Home() {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-12 col-md-6 product-desc'>
                <small>NEW PRODUCT</small>
                <h1>XX99 MARK II <br/>
                HEADPHONES
                </h1>

                <p>Experience natural, lifelike audio and exceptional
                  <br/> build quility made for the passionate music <br/>
                  enthusiast
                </p>

                <button className='productBtn'>SEE PRODUCT</button>
            </div>
            <div className='col-12 col-md-6'>
              <img src={require('../../assets/earphone.png')} alt="earphone" className='w-100'/>
            </div>
        </div>

    </div>

    <div className='bgWhite'>
        <div className='container'>
            <div className='row product1'>
                <div className='col-12 col-md-4'>
                    <div className='product text-center'>
                        <img src={require('../../assets/headset1new.png')} alt="headset" width="110px"/>
                        <h5 className='my-3'>HEADPHONE</h5>
                        <span>SHOP <i class="fa-solid fa-chevron-right"></i></span>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='product text-center'>
                        <img src={require('../../assets/speakernew.png')} alt="headset" width="110px"/>
                        <h5 className='my-3'>SPEAKERS</h5>
                        <span>SHOP <i class="fa-solid fa-chevron-right"></i></span>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='product text-center'>
                        <img src={require('../../assets/earbudnew.png')} alt="headset" width="110px"/>
                        <h5 className='my-3'>HEADPHONES</h5>
                        <span>SHOP <i class="fa-solid fa-chevron-right"></i></span>
                    </div>
                </div>
            </div>


            <div className='bigSpeaker'>
                  <div className='row'>
                      <div className='col-12 col-md-6 text-center speaker'>
                          <img src={require('../../assets/bigspeakernew.png')} alt="big" width="60%"/>
                      </div>

                      <div className="col-12 col-md-6 product-desc">
                          <h1>XX99 MARK II <br/>
                          HEADPHONES
                          </h1>

                          <p>Experience natural, lifelike audio and exceptional
                            <br/> build quility made for the passionate music <br/>
                            enthusiast
                          </p>

                          <button className='btnBlack'>SEE PRODUCT</button>
                      </div>
                  </div>
            </div>



            <div className='tableSpeaker mt-5'>
                      <div className="tableSpeaker1">
                        <p>ZX7 SPEAKER</p>
                        <button>SEE PRODUCT</button>
                      </div>
                      <div className="tableSpeaker2">
                        <img src={require('../../assets/tablespeakernew.png')} width="700px"/>
                      </div>
                  
            </div>


            <div className='earPhone row mt-5'>
                  <div className="col-12 col-md-6 earColumn">     
                  
                  </div>
                  <div className="col-12 col-md-6 tableSpeaker1">
                      <p>ZX7 SPEAKER</p>
                      <button>SEE PRODUCT</button>
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

</>
  )
}

export default Home