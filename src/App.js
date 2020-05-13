import React from 'react'
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
  const classes = useStyles()
  return (
    <div>
      <Header />
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
