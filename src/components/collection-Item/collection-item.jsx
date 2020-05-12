import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import './collection-item.scss'

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 500,
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 446,
  },
  name: {},
  price: {},
}))

const CollectionItem = ({ imageUrl, name, price }) => {
  const classes = useStyles()

  return (
    <Grid item sm>
      <Paper className={classes.paper} elevation={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`${imageUrl}`}
              title={`${name}`}
            />
            <CardContent>
              <div className='collection-footer'>
                <span className={classes.name}>{name}</span>
                <span className={classes.price}>{price}</span>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Grid>
  )
}

export default CollectionItem
