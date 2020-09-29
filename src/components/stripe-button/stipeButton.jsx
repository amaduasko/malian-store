import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { stripe_public_api_key } from '../../config'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PaymentIcon from '@material-ui/icons/Payment'

const useStyles = makeStyles((theme) => ({
    btn: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 150,
        fontWeight: 600,
        letterSpacing: 1.2,
        textTransform: 'Capitalize',
        margin: 'auto',
    },
}))

const StripeCheckoutButton = ({ price }) => {
    const classes = useStyles()
    const priceForStripe = price * 100
    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            name='Malian Store ML.'
            billingAddress
            shippingAddress
            image='/assets/mali.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={stripe_public_api_key}
        >
            <Button variant='contained' color='primary' className={classes.btn}>
                <PaymentIcon />
                Pay Now
            </Button>
        </StripeCheckout>
    )
}

export default StripeCheckoutButton
