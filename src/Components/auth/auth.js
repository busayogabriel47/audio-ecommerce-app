import React, {useRef, useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions  from '../../_actions/authAction';
import {useNavigate} from 'react-router-dom';
import '../Checkout/Check.css';


function Auth() {


const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
});
const [success, setSuccess] = useState(false)

const navigate = useNavigate();
const message = useSelector(state=> state.registration.registering);
const dispatch = useDispatch();


const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
} 

//Reset login status
useEffect(()=> {
    dispatch(authActions.logout());
}, []);



const onSubmit = (e) => {
    e.preventDefault()

    setSuccess(true);
    if(user.email && user.username && user.password){
        dispatch(authActions.register(user))
        navigate('/login')
    }

    console.log("user:", user);

}

  return (
    <div className='lightBg'>

    <div className='container'>
    <div className='row' style={{display: 'flex', justifyContent:"center"}}>
        <div className='col-12 mt-5 checkLight text-center'>
            <Link to="/single">Go Back</Link>
        </div>
        <div className='col-12 col-md-6 checkOut1'>
           <div className='row mb-5'>

            <form onSubmit={onSubmit}>
                    <div className='col-12 mb-5'>
                        <h1>REGISTER</h1>

                    </div>
                    
                        <div class="mb-3 col-12 mb-4">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" 
                            name='username'
                            value={user.username}
                            onChange={handleChange} 
                            className={'form-control' + (success && !user.username ? ' is-invalid': '')}
                            id="username" 
                            placeholder="Alexel Ward"/>
                        </div>

                        {success && !user.username && 
                            <div className='invalid-feedback'>Username is required</div>
                        }

                    <div class="mb-3 col-12 mb-4">
                        <label for="email" class="form-label">Email address</label>
                        <input 
                        type="email" 
                        name='email'
                        value={user.email}
                        onChange={handleChange} 
                        className={'form-control' + (success && !user.email ? ' is-invalid': '')}
                        id="email" 
                        placeholder="alexel@mail.com"/>
                    </div>

                    {success && !user.email && 
                        <div className='invalid-feedback'>Email is required</div>
                    }

                    <div class="mb-3 col-12 mb-4">
                        <label for="password" class="form-label">Password</label>
                        <input 
                        type="password" 
                        name='password'
                        value={user.password}
                        onChange={handleChange} 
                        className={'form-control' + (success && !user.password ? ' is-invalid': '')}
                        id="password" 
                        placeholder="*********"/>
                    </div>
                    {success && !user.password && 
                        <div className='invalid-feedback'>Password is required</div>
                    }

                    <div className="row text-center mt-4">
                        <button 
                        type='submit' className='productBtn'>
                            CONTINUE & SIGNUP
                        </button>
                    </div>

                    {message && (

                    <div className={success ? "alert alert-success row text-center mt-4" : 
                    "alert alert-danger row text-center mt-4"} role='alert'>
                        <p>{message}</p>
                    </div>
                    )}

                    <div className="row text-center mt-4">
                        <p>Existing Cutomer? <Link to="/login">Login</Link></p>
                    </div>
              </form>
           </div>

           
        </div>
        
    </div>
    </div>

    </div>
  )
}

export default Auth