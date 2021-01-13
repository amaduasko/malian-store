import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import HomePage from './pages/Home/Home.page'
import ShopPage from './pages/Shop/Shop.page'
import SignPage from './pages/Sign/Sign.page'
import CheckoutPage from './pages/Checkout/Checkout.page'
import Header from './components/Header/header.component'
import './App.scss'

const useStyles = makeStyles((theme) => ({
    appContainer: {
        padding: '20px 60px',
        marginTop: 60,
        [theme.breakpoints.down('xs')]: {
            padding: '20px 10px',
        },
    },
}))

function App({ currentUser, checkUserSession }) {
    const classes = useStyles()

    useEffect(() => {
        checkUserSession()
    }, [])

    return (
        <div>
            <Header />
            <Container className={classes.appContainer}>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route
                        exact
                        path='/sign'
                        render={() =>
                            currentUser ? <Redirect to='/' /> : <SignPage />
                        }
                    />
                </Switch>
            </Container>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession()),
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
