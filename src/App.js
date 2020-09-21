import React, { useEffect } from 'react'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import HomePage from './pages/Home/Home.page'
import ShopPage from './pages/Shop/Shop.page'
import SignPage from './pages/Sign/Sign.page'
import CheckoutPage from './pages/Checkout/Checkout.page'
import Header from './components/Header/header.component'
import './App.scss'

const useStyles = makeStyles((theme) => ({
    AppContainer: {
        padding: '20px 60px',
        marginTop: 60,
    },
}))

function App({ setCurrentUser, currentUser }) {
    const classes = useStyles()

    useEffect(() => {
        let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    })
                })
            } else {
                setCurrentUser(userAuth)
            }
        })
        return () => {
            unsubscribeFromAuth()
        }
    }, [])

    return (
        <div>
            <Header />
            <Switch>
                <Container className={classes.AppContainer}>
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
                </Container>
            </Switch>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
