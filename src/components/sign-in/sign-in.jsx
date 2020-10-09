import React, { useState } from 'react'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormInput from '../form-input/form-input'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '35ch',
        },
    },
    formInput: {},
    formButtonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    typo: {
        paddingLeft: 15,
    },
}))

const SignIn = ({googleSignInStart,emailSignInStart}) => {
    const classes = useStyles()
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password } = values
        emailSignInStart(email, password)

    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })
    }

    return (
        <div>
            <Typography className={classes.typo} variant='h5' gutterBottom>
                Have already an account ?
            </Typography>
            <Typography
                className={classes.typo}
                variant='caption'
                display='block'
                gutterBottom
            >
                Sign in with your email and password
            </Typography>
            <form
                className={classes.root}
                autoComplete='off'
                onSubmit={handleSubmit}
            >
                <FormInput
                    className={classes.formInput}
                    type='email'
                    name='email'
                    required
                    fullWidth
                    label='Email'
                    value={values.email}
                    onChange={handleChange}
                    helperText="We'll never share your email."
                />

                <FormInput
                    className={classes.formInput}
                    required
                    fullWidth
                    type='password'
                    name='password'
                    label='Password'
                    value={values.password}
                    onChange={handleChange}
                    helperText="make sure it's hidden"
                />
                <div className={classes.formButtonContainer}>
                    <Button type='submit' variant='contained' color='primary'>
                        Sign In
                    </Button>
                    <Button
                        type='button'
                        onClick={googleSignInStart}
                        variant='contained'
                        color='secondary'
                    >
                        Sign In with google
                    </Button>
                </div>
            </form>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn)
