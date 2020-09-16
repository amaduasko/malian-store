import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import './collection-item.scss'

const useStyles = makeStyles((theme) => ({
    paper: {
        height: 500,
        position: 'relative',
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 446,
    },
    name: {
        fontWeight: 500,
    },
    price: {},
    addToCardBtn: {
        display: 'none',
        width: '80%',
        backgroundColor: '#fff',
        color: '#000',
        fontWeight: 600,
        letterSpacing: 1.2,
        opacity: 0.7,
        position: 'absolute',
        top: 390,
        right: 0,
        left: 0,
        margin: 'auto',
        '&:hover': {
            backgroundColor: '#000',
            color: '#fff',
        },
    },
}))

const CollectionItem = ({ imageUrl, name, price }) => {
    const classes = useStyles()

    return (
        <Grid item md sm={6} xs={12}>
            <Paper className={classes.paper + ' card-paper'} elevation={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media + ' media'}
                            image={`${imageUrl}`}
                            title={`${name}`}
                        />
                        <CardContent>
                            <div className='collection-footer'>
                                <span className={classes.name}>{name}</span>
                                <span className={classes.price}>${price}</span>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Button
                    className={classes.addToCardBtn + ' add-card-btn'}
                    variant='contained'
                >
                    Add to card
                </Button>
            </Paper>
        </Grid>
    )
}

export default CollectionItem
