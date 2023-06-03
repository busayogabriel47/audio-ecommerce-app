import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../Checkout/Check.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const key = "pk_test_51JEDJwGnZVcwwTIKnmfvLeHBePV5wlt2Og4WIziCYIzYg4U44o0fRDhty9UiaJdH4Irpiuxnc8BYfOSAqMuzxYdW00ONz3R7XF"

function Checkout() {

const [stripeToken, setStripeToken] = React.useState(null)

const onToken = (token) => {
  setStripeToken(token)
}


useEffect(()=> {
  const makeRequest = async () => {
      try{
       const res = await axios.post("http://localhost:5000/api/checkout/payment", {
        tokenId: stripeToken.id,
        amount: 2000
       })
       console.log(res.data)
      }catch(err){
        console.log();
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken]
)


  return (
    <div className='lightBg'>

    <div className='container'>
    <div className='row'>
        <div className='col-12 mt-5 checkLight'>
            <Link to="/single">Go Back</Link>
        </div>
        <div className='col-12 col-md-8 checkOut1'>
           <div className='row mb-5'>

              <div className='col-12'>
                <h1>CHECKOUT</h1>

                <h4 className='mt-5 mb-4'>BILLING DETAILS</h4>
              </div>
                <div class="mb-3 col-5">
                    <label for="name" class="form-label">Name</label>
                    <input type="email" class="form-control" id="name" placeholder="Alexel Ward"/>
                </div>
                <div class="mb-3 col-5">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="alexel@mail.com"/>
                </div>

                <div class="mb-3 col-5">
                    <label for="Phone Number" class="form-label">Phone Number</label>
                    <input type="email" class="form-control" id="Phone Number" placeholder="+1202-555-0136"/>
                </div>
           </div>

           <div className='row mb-5'>

                <div className='col-12'>
                  <h4>SHIPPING INFO</h4>
                </div>
                <div class="mb-3 col-10">
                    <label for="address" class="form-label">Address</label>
                    <input type="email" class="form-control" id="address" placeholder="Alexel Ward"/>
                </div>

                <div class="mb-3 col-5">
                    <label for="zipcode" class="form-label">ZIP Code</label>
                    <input type="number" class="form-control" id="zipcode" placeholder="10001"/>
                </div>

                <div class="mb-3 col-5">
                    <label for="city" class="form-label">City</label>
                    <input type="email" class="form-control" id="city" placeholder="New york"/>
                </div>
                
                <div class="mb-3 col-5">
                    <label for="Country" class="form-label">Country</label>
                    <input type="email" class="form-control" id="Country" placeholder="United States"/>
                </div>
           </div>

           <div className='row'>

                <div className='col-12'>
                  <h4>PAYMENT DETAILS</h4>
                </div>

                <div class="mb-3 col-5">
                    <label for="address" class="form-label">Address</label>
                </div>

                <div class="mb-3 col-5">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="form-check-label" for="flexRadioDefault1">
                        e-Money
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="form-check-label" for="flexRadioDefault1">
                        Cach on Delivery
                      </label>
                    </div>
                </div>

                <div class="mb-3 col-5">
                    <label for="emoneyNo" class="form-label">e-Money Number</label>
                    <input type="email" class="form-control" id="emoneyNo" placeholder="238521993"/>
                </div>
                
                <div class="mb-3 col-5">
                    <label for="Country" class="form-label">e-Money PIN</label>
                    <input type="email" class="form-control" id="Country" placeholder="6891"/>
                </div>
           </div>
        </div>


        {/*-----------Summary-------------*/}
        <div className='col-12 col-md-4 summary'>
              <div className='row mb-4'>
                  <div className='col-3 text-center sum1'>
                        <img src={require('../../assets/xx59.png')} width="90%"/>
                  </div>
                  <div className='col-7'>
                    <h6>xx99 MK II</h6>
                    <p>$2,999</p>
                  </div>
                  <div className='col-2'>
                      <p>x1</p>
                  </div>
              </div>

              <div className='row mb-4'>
                  <div className='col-3 text-center sum1'>
                        <img src={require('../../assets/xx99.png')} width="90%"/>
                  </div>
                  <div className='col-7'>
                    <h6>xx99 MK II</h6>
                    <p>$2,999</p>
                  </div>
                  <div className='col-2'>
                      <p>x2</p>
                  </div>
              </div>

              <div className='row mb-4'>
                  <div className='col-3 text-center sum1'>
                        <img src={require('../../assets/earbudnew.png')} width="90%"/>
                  </div>
                  <div className='col-7'>
                    <h6>xx99 MK II</h6>
                    <p>$2,999</p>
                  </div>
                  <div className='col-2'>
                      <p>x1</p>
                  </div>
              </div>

            {/*--------Total----------*/}


            <div className='row mb-4'>
                  <div className='col-6'>
                        <p>TOTAL</p>
                        <p>SHIPPING</p>
                        <p>VAT (INCLUDED)</p>
                        <p>GRAND TOTAL</p>
                  </div>
                  <div className='col-6 '>
                      <p>$5,396</p>
                      <p>$50</p>
                      <p>$1, 079</p>

                      <p>$5, 446</p>
                  </div>
              </div>

              <dic className="row text-center">
                 <StripeCheckout
                 name='Audio-ecommerce'
                 image="http://localhost:3000/static/media/headset1new.b633ca171e01da998c94.png"
                 billingAddress
                 shippingAddress
                 description='Your total is N20000'
                 amount={2000000}
                 token={onToken}
                 stripeKey={key}
                 >
                  <Link to="/checkout" className='productBtn'>CONTINUE & PAY</Link>
                 </StripeCheckout>
              </dic>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Checkout