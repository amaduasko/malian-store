import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
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
                    <Tooltip title='decrease' placement='top-start'>
                        <IconButton
                            color='primary'
                            aria-label='decrease'
                            onClick={() => removeItem(cartItem)}
                        >
                            <ChevronLeftIcon />
                        </IconButton>
                    </Tooltip>

                    <span className={classes.value}>{quantity}</span>
                    <Tooltip title='increase' placement='top-start'>
                        <IconButton
                            color='primary'
                            aria-label='increase'
                            onClick={() => addItem(cartItem)}
                        >
                            <ChevronRightRoundedIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </TableCell>
            <TableCell>
                <span className={classes.value}>{price}</span>
            </TableCell>
            <TableCell>
                <Tooltip title='remove' placement='top-start'>
                    <IconButton
                        color='secondary'
                        aria-label='remove'
                        onClick={() => clearItem(cartItem)}
                    >
                        <ClearIcon />
                    </IconButton>
                </Tooltip>
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
