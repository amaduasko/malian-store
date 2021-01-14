import React, { useEffect, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header/header.component'
import Spinner from './components/spinner/spinner'
import ErrorBoundary from './components/error-boundary/error-boundary'
import './App.scss'

const HomePage = lazy(() => import('./pages/Home/Home.page'))
const ShopPage = lazy(() => import('./pages/Shop/Shop.page'))
const SignPage = lazy(() => import('./pages/Sign/Sign.page'))
const CheckoutPage = lazy(() => import('./pages/Checkout/Checkout.page'))

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
    }, [checkUserSession])

    return (
        <ErrorBoundary>
            <Header />
            <Container className={classes.appContainer}>
                <Switch>
                    <Suspense fallback={Spinner}>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={ShopPage} />
                        <Route
                            exact
                            path='/checkout'
                            component={CheckoutPage}
                        />
                        <Route
                            exact
                            path='/sign'
                            render={() =>
                                currentUser ? <Redirect to='/' /> : <SignPage />
                            }
                        />
                    </Suspense>
                </Switch>
            </Container>
        </ErrorBoundary>
    )
}

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession()),
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
