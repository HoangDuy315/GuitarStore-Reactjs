import React from 'react'


const Footer = () => {
    return (
       <footer className='text-center text-lg-start bg-dark text-muted'>
            <div className='f-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div class="me-5 d-none d-lg-block">
                    <span class="text-white fs-5">Social</span>
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
       </footer>
    )
}

export default Footer
