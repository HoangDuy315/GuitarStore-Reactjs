import React from 'react'
import Product from './Product'
import Staff from './Staff'
import '../index.css'
import About from './About'
import Contact from './Contact'
import Carousel from './Carousel'

const Home = () => {
    return (
        <div>
            <div id="home" class="d-flex ">
                <div class="container d-flex align-items-center">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <h1 class="display-1 fw-bolder text-white text-center">
                                BRINGING MUSIC TO<span class="text-warning"> EVERYONE</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel/>
            <Product/>
            <Staff/>
            <About/>
            <Contact/>
        </div>
        
    )
}

export default Home
