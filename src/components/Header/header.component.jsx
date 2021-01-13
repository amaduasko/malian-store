import React, { Fragment, useState, useEffect, useLayoutEffect } from 'react'
import { loadCSS } from 'fg-loadcss'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
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
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import { signOutStart } from '../../redux/user/user.actions'

import { ReactComponent as Logo } from '../../assets/timbuktu.svg'

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

        [theme.breakpoints.down(740)]: {
            width: '50%',
            margin: ' 5px 0',
            padding: '3% 6%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            margin: ' 10px 0',
            padding: '5% 8%',
        },
    },
    userInfoContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '0.6rem 1.6rem',
        backgroundColor: '#1a237e',
        borderRadius: '0.5rem',
        border: '2px solid #1a237e',
        '&:hover': {
            borderColor: '#fff',
        },

        [theme.breakpoints.down(740)]: {
            color: '#fff',
            width: '50%',
            margin: ' 5px 0',
            padding: '3% 6%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            color: '#fff',
            margin: ' 10px 0',
            padding: '5% 8%',
        },
    },
    userName: {
        fontWeight: 600,
        letterSpacing: 1.2,
        userSelect: 'none',
        [theme.breakpoints.down(322)]: {
            fontSize: 12,
        },
    },
    mobileNav: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'whitesmoke',
        width: '50vw',
        height: '100vh',
        paddingTop: 64,
    },
}))

const Header = ({ currentUser, hidden, signOut }) => {
    const classes = useStyles()
    const [isDrawerOpen, setIsDrawerOpen] = useState(null)
    const [size, setSize] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)

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
                    {size <= 740 && (
                        <Fragment>
                            <IconButton
                                edge='start'
                                className={classes.menuButton}
                                color='inherit'
                                aria-label='menu'
                                onClick={toggleDrawer}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor='left'
                                open={isDrawerOpen}
                                onClose={toggleDrawer}
                            >
                                <div className={classes.mobileNav}>
                                    <Link className={classes.link} to='/shop'>
                                        <Icon className='fab fa-shopify' />
                                        SHOP
                                    </Link>

                                    <Link
                                        className={classes.link}
                                        to='/contact'
                                    >
                                        <Icon className='fas fa-id-badge' />
                                        CONTACT
                                    </Link>

                                    {currentUser ? (
                                        <div
                                            className={
                                                classes.userInfoContainer
                                            }
                                        >
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
                                                        signOut()
                                                        handleClose()
                                                    }}
                                                >
                                                    <Icon
                                                        style={{
                                                            marginRight:
                                                                '0.5rem ',
                                                        }}
                                                        className='fas fa-sign-out-alt'
                                                    />
                                                    Sign out
                                                </MenuItem>
                                            </Menu>
                                        </div>
                                    ) : (
                                        <Link
                                            className={classes.link}
                                            to='/sign'
                                        >
                                            <Icon className='fas fa-sign-in-alt' />
                                            Sign in
                                        </Link>
                                    )}
                                </div>
                            </Drawer>
                        </Fragment>
                    )}
                    <Link to='/' className='logo-container'>
                        <Logo className='logo' />
                    </Link>
                    <Container className='options'>
                        <Grid container justify='flex-end' spacing={2}>
                            {size > 740 && (
                                <Fragment>
                                    <Grid item>
                                        <Link
                                            className={classes.link}
                                            to='/shop'
                                        >
                                            <Icon className='fab fa-shopify' />
                                            SHOP
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            className={classes.link}
                                            to='/contact'
                                        >
                                            <Icon className='fas fa-id-badge' />
                                            CONTACT
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        {currentUser ? (
                                            <div
                                                className={
                                                    classes.userInfoContainer
                                                }
                                            >
                                                <span
                                                    className={classes.userName}
                                                >
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
                                                        className={
                                                            classes.menuItem
                                                        }
                                                        onClick={handleClose}
                                                    >
                                                        Profile
                                                    </MenuItem>
                                                    <MenuItem
                                                        className={
                                                            classes.menuItem
                                                        }
                                                        onClick={handleClose}
                                                    >
                                                        My account
                                                    </MenuItem>
                                                    <MenuItem
                                                        className={
                                                            classes.menuItemSignout
                                                        }
                                                        onClick={() => {
                                                            signOut()
                                                            handleClose()
                                                        }}
                                                    >
                                                        <Icon
                                                            style={{
                                                                marginRight:
                                                                    '0.5rem ',
                                                            }}
                                                            className='fas fa-sign-out-alt'
                                                        />
                                                        Sign out
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        ) : (
                                            <Link
                                                className={classes.link}
                                                to='/sign'
                                            >
                                                <Icon className='fas fa-sign-in-alt' />
                                                Sign in
                                            </Link>
                                        )}
                                    </Grid>
                                </Fragment>
                            )}
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
