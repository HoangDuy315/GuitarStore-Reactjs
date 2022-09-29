import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';
import SU from "./signup1.png";


const Login = () => {
    return (
        <div>
            <div id="bg" class="d-flex ">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="">
                            <form className='form'>
                                    <img src={SU} alt="Login" />
                                    <h2>Login</h2>
                                    <input type="Email" name='email' className='boxx' placeholder='Type your email'/>
                                    <input type="Password" name='password' className='boxx' placeholder='Password' />
                                    <NavLink to='/' className='forget_password'>Forgot username/password</NavLink>    
                                    <NavLink to='/'><button className='submit btn btn-outline-warning'>Submit</button></NavLink>
                                    
                                    <NavLink to='/signup' className='create_account'>Create your an account</NavLink>
                                    <a href="https://www.facebook.com/profile.php?id=100007746304417" className='me-1 ms-3 text-warning fw-bold'>
                                        <i class="fa fa-facebook-f"></i>
                                        <a href="/" className='me-1 ms-4 text-warning fw-bold'>
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                        <a href="/" className='me-1 ms-3 text-warning fw-bold'>
                                            <i class="fa fa-google"></i>
                                        </a>
                                        <a href="https://www.instagram.com/hoangduy315/" className='me-1 ms-3 text-warning fw-bold'>
                                            <i class="fa fa-instagram"></i>
                                        </a>
                                        <a href="/" className='me-1 ms-3 text-warning fw-bold'>
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                        <a href="https://github.com/HoangDuy315" className='me-1 ms-3 text-warning fw-bold'>
                                            <i class="fa fa-github"></i>
                                        </a>
                                    </a> 
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
       </div>
    )
}

export default Login
