import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import CartItem from '../cart-item'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './cart-dropdown.scss'

const CartDropdown = ({ cartItems, dispatch }) => {
    const history = useHistory()
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
                {!cartItems.length && (
                    <span className='empty-message'>Your cart is empty!</span>
                )}
            </div>
            <Button
                variant='contained'
                color='primary'
                style={{ fontWeight: 600, letterSpacing: 1.3 }}
                onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}
                disabled={!cartItems.length}
            >
                GO TO CHECKOUT
            </Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartDropdown)
