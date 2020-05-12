import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.style.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    letterSpacing: 1.5,
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar variant='dense'>
          {window?.innerWidth <= 768 && (
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
          )}
          <Link to='/' className='logo-container'>
            <Logo className='logo' />
          </Link>
          <Container className='options'>
            <Grid container justify='flex-end' spacing={5}>
              <Grid item>
                <Link className={classes.link} to='/shop'>
                  SHOP
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link} to='/contact'>
                  CONTACT
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
