import React from 'react'
import EMPTY from './empty.png'

const Cart = () => {
    return (
        <div>
            <div className='p-5 text-center '>
                <img src={EMPTY} alt=""/>
            </div>
            <div className='p-5 text-center fw-bold fs-2 text-warning'>
                I haven't updated this feature yet. Waiting for me on a beautiful day !!!
                <br />
                <span className="p-5 text-dark fs-1 ">GnahYuD</span>
            </div>
        </div>
    )
}

export default Cart
