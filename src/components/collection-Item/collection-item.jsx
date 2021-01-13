import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Tooltip from '@material-ui/core/Tooltip'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
    paper: {},
    root: {
        maxWidth: 345,
        [theme.breakpoints.down('xs')]: {
            maxWidth: 'unset',
        },
    },
    media: {
        height: 446,
    },
    name: {
        fontWeight: 500,
        fontSize: '16px',
    },
    price: { fontSize: '16px', userSelect: 'none' },
    icon: {},
    btn: {
        padding: 5,
    },
}))

const CollectionItem = ({ item, addItem, ...otherProps }) => {
    const classes = useStyles()
    const { imageUrl, name, price } = item

    return (
        <Grid item {...otherProps} sm={6} xs={12}>
            <Paper className={classes.paper} elevation={3}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={`${imageUrl}`}
                        title={`${name}`}
                    />
                    <CardActions>
                        <Grid
                            container
                            justify='space-between'
                            alignItems='center'
                        >
                            <Grid item>
                                <span className={classes.name}>{name}</span>
                            </Grid>
                            <Grid item>
                                <Tooltip
                                    title='Add to cart'
                                    placement='top-start'
                                >
                                    <IconButton
                                        className={classes.btn}
                                        onClick={() => addItem(item)}
                                        aria-label='add to card'
                                        color='primary'
                                    >
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                </Tooltip>

                                <span className={classes.price}>${price}</span>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Paper>
        </Grid>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
})
export default connect(null, mapDispatchToProps)(CollectionItem)
