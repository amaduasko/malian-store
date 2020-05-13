import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import SignIn from '../../components/sign-in/sign-in'

const SignPage = () => {
  return (
    <Container>
      <Grid container>
        <Grid item>
          <SignIn />
        </Grid>
      </Grid>
    </Container>
  )
}

export default SignPage
