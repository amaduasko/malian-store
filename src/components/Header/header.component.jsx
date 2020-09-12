import React, { useState, useEffect, useLayoutEffect } from 'react'
import { loadCSS } from 'fg-loadcss'
import { auth } from '../../firebase/firebase.utils'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Icon from '@material-ui/core/Icon'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/world.svg'

import './header.style.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuItem: {
        '&:hover': {
            backgroundColor: '#3f51b5',
            color: 'white',
        },
    },
    menuItemSignout: {
        backgroundColor: '#f50057',
        color: 'white',
        '&:hover': {
            backgroundColor: '#c51162',
        },
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        letterSpacing: 1.5,
        backgroundColor: '#283593',
        border: '2px solid #283593',
        padding: '0.6rem 1.6rem',
        borderRadius: '0.5rem',
        '&:hover': {
            border: '2px solid #fff',
        },
        '& > span': {
            marginRight: '0.5rem',
            color: '#9fa8da',
        },
    },
    userInfoContainer: {
        padding: '0.6rem 1.6rem',
        backgroundColor: '#1a237e',
        borderRadius: '0.5rem',
        border: '2px solid #1a237e',
        '&:hover': {
            borderColor: '#fff',
        },
    },
    userName: {
        fontWeight: 600,
        letterSpacing: 1.2,
        userSelect: 'none',
    },
}))

const Header = ({ currentUser, hidden }) => {
    const classes = useStyles()
    const [size, setSize] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const updateSize = () => setSize(window?.innerWidth)

    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => {
            window.removeEventListener('resize', updateSize)
        }
    }, [])

    useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.13.0/css/all.css',
            document.querySelector('#font-awesome-css')
        )

        return () => {
            node.parentNode.removeChild(node)
        }
    }, [])

    // const activeStyle = {
    //   fontWeight: 600,
    //   backgroundColor:'#1a237e'
    // }

    return (
        <div className={classes.root}>
            <AppBar position='fixed'>
                <Toolbar variant='dense'>
                    {size <= 768 && (
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
                                    <Icon className='fab fa-shopify' />
                                    SHOP
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link className={classes.link} to='/contact'>
                                    <Icon className='fas fa-id-badge' />
                                    CONTACT
                                </Link>
                            </Grid>
                            <Grid item>
                                {currentUser ? (
                                    <div className={classes.userInfoContainer}>
                                        <span className={classes.userName}>
                                            {currentUser.displayName}
                                        </span>
                                        <IconButton
                                            style={{
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                            }}
                                            aria-label='account of current user'
                                            aria-controls='menu-appbar'
                                            aria-haspopup='true'
                                            onClick={handleMenu}
                                            color='inherit'
                                        >
                                            <AccountCircle />
                                        </IconButton>
                                        <Menu
                                            id='menu-appbar'
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem
                                                className={classes.menuItem}
                                                onClick={handleClose}
                                            >
                                                Profile
                                            </MenuItem>
                                            <MenuItem
                                                className={classes.menuItem}
                                                onClick={handleClose}
                                            >
                                                My account
                                            </MenuItem>
                                            <MenuItem
                                                className={
                                                    classes.menuItemSignout
                                                }
                                                onClick={() => {
                                                    auth.signOut()
                                                    handleClose()
                                                }}
                                            >
                                                <Icon
                                                    style={{
                                                        marginRight: '0.5rem ',
                                                    }}
                                                    className='fas fa-sign-out-alt'
                                                />
                                                Sign out
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                ) : (
                                    <Link className={classes.link} to='/sign'>
                                        <Icon className='fas fa-sign-in-alt' />
                                        Sign in
                                    </Link>
                                )}
                            </Grid>
                            <Grid item>
                                <CartIcon />
                            </Grid>
                        </Grid>
                        {!hidden && <CartDropdown />}
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden,
})

export default connect(mapStateToProps)(Header)
