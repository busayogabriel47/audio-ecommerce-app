import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import '../Checkout/Check.css';
import { useNavigate } from 'react-router-dom';



import * as authAction from '../../_actions/authAction'

function Login(props) {


const navigate = useNavigate();

const [login, setLogin] = useState({
    username: "",
    password: ""
})


const [success, setSuccess] = useState(false);
const {username, password} = login;
const loggingIn = useSelector(state=>state.authentication.loggingIn);

const dispatch = useDispatch();
const location = useLocation();


//reset login status
useEffect(()=> {
    dispatch(authAction.logout());
}, []);

const handleChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value})
}

const formSubmit = (e) => {
    e.preventDefault();


    setSuccess(true);
    if(username && password){
        //get return url from location state or default to home page
        const {from } = navigate.state || {from: {pathname: '/profile'}};
        dispatch(authAction.login(username, password, from))
        window.location.href = "./profile";
    }
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

            <form onSubmit={formSubmit}>
                    <div className='col-12 mb-5'>
                        <h1>logIn</h1>

                    </div>
                    <div class="mb-3 col-12 mb-4">
                        <label for="username" class="form-label">Username</label>
                        <input 
                        type="text" 
                        name='username' 
                        value={login.username} 
                        onChange={handleChange} 
                        className={'form-control' + (success && !username ? ' is-invalid' : "")} 
                        id="username" placeholder="Alexel Ward"/>
                        {success && !username &&
                            <div className='invalid-feedback'>Username is required</div>
                        }
                    </div>

                    <div class="mb-3 col-12 mb-4">
                        <label for="password" class="form-label">Password</label>
                        <input 
                        type="password" 
                        name='password' 
                        value={login.password} 
                        onChange={handleChange} 
                        className={'form-control' + (success && !password ? ' is-invalid' : "")}
                        id="password" placeholder="*********"/>
                    </div>

                    <div className="row text-center mt-4">
                        <button 
                        type='submit'
                        className='productBtn'
                        >
                        {loggingIn && <span className='spinner-border spinner-border-sm'></span>}
                         <span>CONTINUE & LOGIN</span>
                        </button>
                    </div>
                    
            
                    <div className="row text-center mt-4">
                        <p>New Cutomer? Welcome! <Link to="/auth">Register</Link></p>
                    </div>
              </form>
           </div>

           
        </div>
        
    </div>
    </div>

    </div>
  )
  
}

export default Login