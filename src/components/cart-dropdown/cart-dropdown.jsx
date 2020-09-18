import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import CartItem from '../cart-item'
import './cart-dropdown.scss'

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <Button
            variant='contained'
            color='primary'
            style={{ fontWeight: 600, letterSpacing: 1.3 }}
        >
            GO TO CHECKOUT
        </Button>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
})
export default connect(mapStateToProps)(CartDropdown)
