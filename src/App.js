import React, { useState, useEffect } from 'react'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import HomePage from './pages/Home/Home.page'
import ShopPage from './pages/Shop/Shop.page'
import SignPage from './pages/Sign/Sign.page'
import Header from './components/Header/header.component'
import './App.scss'

const useStyles = makeStyles((theme) => ({
    AppContainer: {
        padding: '20px 60px',
        marginTop: 60,
    },
}))

function App() {
    const [currentUser, setcurrentUser] = useState(null)
    const classes = useStyles()

    useEffect(() => {
        let unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            createUserProfileDocument(user)
            setcurrentUser(user)
        })
        return () => {
            unsubscribeFromAuth()
        }
    }, [])

    console.log(currentUser)

    return (
        <div>
            <Header currentUser={currentUser} />
            <Switch>
                <Container className={classes.AppContainer}>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/sign' component={SignPage} />
                </Container>
            </Switch>
        </div>
    )
}

export default App
