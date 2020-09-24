import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ClearIcon from '@material-ui/icons/Clear'

import {
    clearItemFromCart,
    addItem,
    removeItem,
} from '../../redux/cart/cart.actions'
import './checkout-item.style.scss'

const useStyles = makeStyles({
    value: {
        fontSize: 18,
    },
    description: {
        fontSize: 18,
        letterSpacing: 1.2,
    },
})

const CheckoutItemRow = ({ cartItem, clearItem, addItem, removeItem }) => {
    const classes = useStyles()
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <TableRow>
            <TableCell>
                <div className='image-container'>
                    <img alt='item' src={imageUrl} />
                </div>
            </TableCell>
            <TableCell>
                <span className={classes.description}>{name}</span>
            </TableCell>
            <TableCell>
                <div>
                    <IconButton
                        color='primary'
                        onClick={() => removeItem(cartItem)}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                    <span className={classes.value}>{quantity}</span>
                    <IconButton
                        color='primary'
                        onClick={() => addItem(cartItem)}
                    >
                        <ChevronRightRoundedIcon />
                    </IconButton>
                </div>
            </TableCell>
            <TableCell>
                <span className={classes.value}>{price}</span>
            </TableCell>
            <TableCell>
                <IconButton
                    color='secondary'
                    onClick={() => clearItem(cartItem)}
                >
                    <ClearIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItemRow)
