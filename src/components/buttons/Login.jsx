import React from 'react'

const Login = () => {
    return (
        <>
        {/* <!-- Button trigger modal --> */}
        <button type="button" class="btn  btn-outline-warning px-9 rounded-pill ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
            <span className='fa fa-sign-in me-1'></span>login
        </button>

        {/* <!-- Modal --> */}
        <div class="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" htmlFor="exampleCheck1">Remember password</label>
                            </div>
                            <buton className="btn btn-primary w-100 mb-3">
                                <span className='fa fa-google me-2'></span> Sign in with Google
                            </buton>
                            <buton className="btn btn-primary w-100 mb-3">
                                <span className='fa fa-facebook me-2'></span> Sign in with Facebook
                            </buton>
                            <button type="submit" class="btn btn-outline-primary w-100 mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
