import React from 'react'
import { NavLink } from 'react-router-dom'

const Cart = () => {
    return (
        <div className=''>
            <NavLink to='/cart' className='btn btn-outline-warning px-9 rounded-pill ms-2'>
                <span className='fa fa-shopping-cart me-1'></span>Cart (0)
            </NavLink>
        </div>
    )
}

export default Cart
