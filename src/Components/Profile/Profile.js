import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom'
import '../Profile/Profile.css';

import * as authAction from '../../_actions/authAction'

const UserProfile = () => {

const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    if(!user){
        return <Navigate to='/login'/>
    }

    return(
        <div className="profile container">
            <div className="row profileDetails">
                <div className="col-12">
                    <h2>{user ? user.username: null}</h2>
                    <p>New York, USA</p>
                </div>
            </div>

            <div className='row py-5'>
                <div className='col-12'>
                    <div class="d-flex align-items-start">
                        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</button>
                            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Orders</button>
                            <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Addresses</button>
                            <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Payments</button>
                            <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Wishlist</button>
                        </div>
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">...</div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                                <h2>Orders</h2>
                                <p>8 ITEMS</p>
                                <div className='row productB mt-4'>
                                    <div className='col-12 col-md-4 mt-4'>
                                         <h5>Order 451534</h5> 
                                         <p>VIEW ORDER</p>
                                    </div>
                                    <div className='col-12 col-md-6 mt-4'>
                                         <span>Shipped on 15 Apr, 2019</span>
                                    </div>
                                    <div className='col-12 col-md-2'>
                                         <img src={require("../../assets/earphone.png")} width="100%"/>
                                    </div>
                                </div>

                                <div className='row productB mt-4'>
                                    <div className='col-12 col-md-4 mt-4'>
                                         <h5>Order 451534</h5> 
                                         <p>VIEW ORDER</p>
                                    </div>
                                    <div className='col-12 col-md-6 mt-4'>
                                         <span>Shipped on 15 Apr, 2019</span>
                                    </div>
                                    <div className='col-12 col-md-2'>
                                         <img src={require("../../assets/earbudnew.png")} width="100%"/>
                                    </div>
                                </div>

                                <div className='row productB mt-4'>
                                    <div className='col-12 col-md-4 mt-4'>
                                         <h5>Order 451534</h5> 
                                         <p>VIEW ORDER</p>
                                    </div>
                                    <div className='col-12 col-md-6 mt-4'>
                                         <span>Shipped on 15 Apr, 2019</span>
                                    </div>
                                    <div className='col-12 col-md-2'>
                                         <img src={require("../../assets/earbudblack.png")} width="100%"/>
                                    </div>
                                </div>

                                <div className='row productB mt-4'>
                                    <div className='col-12 col-md-4 mt-4'>
                                         <h5>Order 451534</h5> 
                                         <p>VIEW ORDER</p>
                                    </div>
                                    <div className='col-12 col-md-6 mt-4'>
                                         <span>Shipped on 15 Apr, 2019</span>
                                    </div>
                                    <div className='col-12 col-md-2'>
                                         <img src={require("../../assets/earphone.png")} width="100%"/>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserProfile;