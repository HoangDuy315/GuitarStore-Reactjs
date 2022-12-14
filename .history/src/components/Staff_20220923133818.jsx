import React from 'react'

const Staff = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
             {/* <!-- Designer --> */}
            <div id="designer">
                <div class="container">
                    <div class="row mb-5    ">
                    
                    </div>
                    <div class="row">
                        {/* <!-- 1 --> */}
                        <div class="col-md-3">
                            <div class="card border-0">
                                <img src="./assets/images/ceo.png" class="card-img-top" alt="..."/>
                                <div class="card-body text-center">
                                <h4 class="card-title text-warning">CEO</h4>
                                <h6 class="card-title lead">GnahYud</h6>
                                <p class="card-text">When life changes to be harder, change yourself to be stronger</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- 2 --> */}
                        <div class="col-md-3">
                            <div class="card border-0">
                                <img src="./assets/images/trưởng phòng.png" class="card-img-top" alt="..."/>
                                <div class="card-body text-center">
                                <h4 class="card-title text-warning">Trưởng phòng</h4>
                                <h6 class="card-title lead">Glong</h6>
                                <p class="card-text">In three words I can sum up I’ve learned in life: it goes on.</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- 3 --> */}
                        <div class="col-md-3">
                            <div class="card border-0">
                                <img src="./assets/images/bảo vệ.png" class="card-img-top h-100" alt="..."/>
                                <div class="card-body text-center">
                                <h4 class="card-title text-warning">Bảo vệ</h4>
                                <h6 class="card-title lead">Ốc Piêu</h6>
                                <p class="card-text">We could never learn to be brave and patient, if there were only joy in the world.</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- 4 --> */}
                        <div class="col-md-3">
                            <div class="card border-0">
                                <img src="./assets/images/lao công.png" class="card-img-top" alt="..."/>
                                <div class="card-body text-center">
                                <h4 class="card-title text-warning">Lao công</h4>
                                <h6 class="card-title lead">Như Hiền</h6>
                                <p class="card-text">Sadness flies away on the wings of time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staff
