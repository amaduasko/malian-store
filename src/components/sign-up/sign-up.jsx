import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormInput from '../form-input/form-input'
import Typography from '@material-ui/core/Typography'
import { signUpStart } from '../../redux/user/user.actions'

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

const SignUp = ({ signUp }) => {
    const classes = useStyles()
    const [values, setValues] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleSubmit = async (event) => {
        const { displayName, email, password, confirmPassword } = values
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("passwords don't match!!!")
            return
        }

        signUp({ displayName, email, password })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })
    }

    return (
        <div>
            <Typography className={classes.typo} variant='h5' gutterBottom>
                I do not have an account
            </Typography>
            <Typography
                className={classes.typo}
                variant='caption'
                display='block'
                gutterBottom
            >
                Sign up with your email and password
            </Typography>
            <form
                className={classes.root}
                autoComplete='off'
                onSubmit={handleSubmit}
            >
                <FormInput
                    className={classes.formInput}
                    type='text'
                    name='displayName'
                    required
                    fullWidth
                    label='Display Name'
                    value={values.displayName}
                    onChange={handleChange}
                />
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
                <FormInput
                    className={classes.formInput}
                    required
                    fullWidth
                    type='password'
                    name='confirmPassword'
                    label='confirm Password'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    helperText="make sure it's the same password"
                />
                <div className={classes.formButtonContainer}>
                    <Button type='submit' variant='contained' color='primary'>
                        Sign Up
                    </Button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signUp: (userCredentials) => dispatch(signUpStart(userCredentials)),
})

export default connect(null, mapDispatchToProps)(SignUp)
