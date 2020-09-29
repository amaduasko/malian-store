import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selector'
import CheckoutItemRow from '../../components/checkout-item/CheckoutItem'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import StripeCheckoutButton from '../../components/stripe-button/stipeButton'
import './checkout.style.scss'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableHead: {
        textTransform: 'capitalize',
        fontWeight: 600,
        letterSpacing: 1.2,
    },
})

const CheckoutPage = ({ cartItems, total }) => {
    const classes = useStyles()
    return (
        <>
            <TableContainer component={Paper} style={{ marginTop: '2rem' }}>
                <Table className={classes.table} aria-label='checkout table'>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead}>
                                Product
                            </TableCell>
                            <TableCell className={classes.tableHead}>
                                Description
                            </TableCell>
                            <TableCell className={classes.tableHead}>
                                Quantity&nbsp;
                            </TableCell>
                            <TableCell className={classes.tableHead}>
                                Price&nbsp;
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map((cartItem) => (
                            <CheckoutItemRow
                                key={cartItem.id}
                                cartItem={cartItem}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography
                variant='h6'
                gutterBottom
                style={{
                    width: 130,
                    marginLeft: 'auto',
                    marginTop: '0.5rem',
                    fontFamily: "'PT Sans', sans-serif",
                }}
            >
                TOTAL : ${total}
            </Typography>
            <Typography
                variant='h6'
                color='secondary'
                style={{
                    fontFamily: "'PT Sans', sans-serif",
                    textAlign: 'center',
                    marginBottom: '1rem',
                }}
            >
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </Typography>
            <StripeCheckoutButton price={total} />
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)
