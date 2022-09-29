import React from 'react'
import './Signup.css';
import SU from "./signup1.png";
import { NavLink } from 'react-router-dom'

const Signup = () => {
    return (
        <div>
            <div id="bg1" class="d-flex">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="">
                            <form action="" className='form'>
                                    <img src={SU} alt="Signup" />
                                    <h1 className='sup'>SIGN UP</h1>
                                    <input type="Name" name='name' className='box' placeholder='Type your fullname'/>
                                    <input type="Email" name='email' className='box' placeholder='Type your email'/>
                                    <input type="Password" name='password' className='box' placeholder='Password' />
                                    <input type="Password" name='password' className='box' placeholder='Confirm Password' />
                                    <NavLink to='/'><button className='submit btn btn-outline-warning'>Submit</button></NavLink>
                                    <NavLink to='/login' className='login_again'>Login</NavLink>
                                    <a href="https://www.facebook.com/profile.php?id=100007746304417" className='icons me-1 ms-3 text-warning fw-bold'>
                                        <i class="fa fa-facebook-f"></i>
                                        <a href="/" className='icons me-1 ms-4 text-warning fw-bold'>
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                        <a href="/" className='icons me-1 ms-3 text-warning fw-bold'>
                                            <i class="fa fa-google"></i>
                                        </a>
                                        <a href="https://www.instagram.com/hoangduy315/" className='icons me-1 ms-3 text-warning fw-bold'>
                                            <i class="fa fa-instagram"></i>
                                        </a>
                                        <a href="/" className='icons me-1 ms-3 text-warning fw-bold'>
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                        <a href="https://github.com/HoangDuy315" className='icons me-1 ms-3 text-warning fw-bold'>
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

export default Signup
