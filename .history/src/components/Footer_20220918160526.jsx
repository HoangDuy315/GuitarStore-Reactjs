import React from 'react'


const Footer = () => {
    return (
       <footer className='text-center text-lg-start bg-dark text-muted'>
            <div className='f-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div class="me-5 d-none d-lg-block">
                    <span class="text-white fs-5">Social</span>
                </div>

                <div>
                    <span class="fa fa-facebook">
                        
                    </span>
                    <span href="" class="me-4 link-secondary">
                        <i class="fab fa-twitter"></i>
                    </span>
                    <span href="" class="me-4 link-secondary">
                        <i class="fab fa-google"></i>
                    </span>
                    <span href="" class="me-4 link-secondary">
                        <i class="fab fa-instagram"></i>
                    </span>
                    <span href="" class="me-4 link-secondary">
                        <i class="fab fa-linkedin"></i>
                    </span>
                    <span href="" class="me-4 link-secondary">
                        <i class="fab fa-github"></i>
                    </span>
                </div>
            </div>
       </footer>
    )
}

export default Footer
