import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 60,
        paddingTop: 20,
    },
}))

const SignPage = () => {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Grid container justify='space-evenly'>
                <Grid item>
                    <SignIn />
                </Grid>
                <Grid item>
                    <SignUp />
                </Grid>
            </Grid>
        </Container>
    )
}

export default SignPage
