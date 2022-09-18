import React from 'react'


const Footer = () => {
    return (
       <footer className='text-center text-lg-start bg-dark text-muted'>
            <div className='f-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div class="me-5 d-none d-lg-block">
                    <span class="text-white fs-5 text-center">Social</span>
                </div>

                <div className='me-4'>
                    <span class="fa fa-facebook ms-2"/>
                    <span class="fa fa-twitter ms-2"/>
                    <span class="fa fa-google ms-2"/>
                    <span class="fa fa-instagram ms-2"/>
                    <span class="fa fa-linkedin ms-2"/>
                    <span class="fa fa-github ms-2"/>
                </div>
            </div>

            <div className="class">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fa fa-gem me-3 text-secondary"></i>GNAHYUD HD
                            </h6>
                            <p>
                                <a href="#!" class="text-white">Giới thiệu công ty</a>
                            </p>
                            <p>
                                <a href="#!" class="text-white">Hệ thống Showroom, đại lý</a>
                            </p>
                            <p>
                                <a href="#!" class="text-white">Liên hệ/góp ý</a>
                            </p>
                            <p>
                                <a href="#!" class="text-white">Mua trả góp</a>
                            </p>
                        </div>

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Hướng dẫn chung
                            </h6>
                            <p>
                                <a href="#!" class="text-white">Giao hàng-đổi trả</a>
                            </p>
                            <p>
                                <a href="#!" class="text-white">Hướng dẫn mua hàng</a>
                            </p>
                            <p>
                                <a href="#!" class="text-white">Thanh toán và bảo mật</a>
                            </p>
                            <p>
                                <a href="#!" class="text-white">Bảo hành Guitar</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
       </footer>
    )
}

export default Footer
