import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormInput from '../form-input/form-input'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '35ch',
    },
  },
}))

const SignIn = () => {
  const classes = useStyles()
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(values)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  return (
    <form className={classes.root} autoComplete='off' onSubmit={handleSubmit}>
      <FormInput
        type='email'
        name='email'
        required
        fullWidth
        label='Email'
        onChange={handleChange}
        helperText="We'll never share your email."
      />

      <FormInput
        required
        fullWidth
        type='password'
        name='password'
        label='Password'
        onChange={handleChange}
        helperText="make sure it's hidden"
      />

      <Button type='submit' variant='contained' color='primary'>
        Sign In
      </Button>
    </form>
  )
}

export default SignIn
