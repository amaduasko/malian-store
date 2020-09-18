import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg'

import './cart-icon.scss'

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce((acc, current) => acc + current.quantity, 0),
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
