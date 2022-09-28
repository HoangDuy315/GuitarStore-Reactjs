import React from 'react'

const Signup = () => {
    return (
        <div>
            <button type="button" class="btn btn-outline-warning rounded-pill ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className='fa fa-user-plus me-1'></span>Register
            </button>


            <div class="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-warning fw-bold " id="exampleModalLabel">Signup</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <form>
                                <div class="mb-3 ">
                                    <label htmlFor="exampleInput" class="form-label">Username</label>
                                    <input type="text" class="form-control " id="exampleInput"/>

                                </div>
                                <div class="mb-3">
                                    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" htmlFor="exampleCheck1">Remember password</label>
                                </div>
                                <buton className="btn btn-outline-warning rounded-pill w-100 mb-3">
                                    <span className='fa fa-google me-2'></span> Sign up with Google
                                </buton>
                                <buton className="btn btn-outline-warning rounded-pill w-100 mb-3">
                                    <span className='fa fa-facebook me-2'></span> Sign up with Facebook
                                </buton>
                                <button type="submit" class="btn btn-warning rounded-pill w-100 mt-4 fw-bold">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
