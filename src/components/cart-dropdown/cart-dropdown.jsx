import React from 'react'
import Button from '@material-ui/core/Button'
import './cart-dropdown.scss'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <Button
            variant='contained'
            color='primary'
            style={{ fontWeight: 600, letterSpacing: 1.3 }}
        >
            GO TO CHECKOUT
        </Button>
    </div>
)

export default CartDropdown
