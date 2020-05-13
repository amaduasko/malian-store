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

import { ReactComponent as Logo } from '../../assets/world.svg'
import { ReactComponent as Signal } from '../../assets/internet.svg'
import { ReactComponent as Symbol } from '../../assets/peace.svg'

import './header.style.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    letterSpacing: 1.5,
    backgroundColor: '#283593',
    padding: '0.6rem 1.6rem',
    borderRadius: '0.5rem',
    '&:hover': {
      backgroundColor: '#303f9f',
    },
  },
}))

const Header = () => {
  const classes = useStyles()

  // const activeStyle = {
  //   fontWeight: 600,
  //   backgroundColor:'#1a237e'
  // }

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
            <Grid container justify='flex-end' spacing={2}>
              <Grid item>
                <Link className={classes.link} to='/shop'>
                  <Symbol style={{ marginRight: '0.5rem' }} />
                  SHOP
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link} to='/contact'>
                  <Signal style={{ marginRight: '0.5rem' }} />
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
