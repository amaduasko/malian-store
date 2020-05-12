import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CollectionItem from '../../components/collection-Item/collection-item'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 60,
  },
  title: {
    fontSize: '28px',
    marginBottom: '25px',
    width: 'fit-content',
    backgroundColor: '#000',
    padding: '0.5rem 2rem',
    color: '#fff',
    borderRadius: '0px 30px 0px 30px',
  },
}))

const CollectionPreview = ({ title, items }) => {
  const classes = useStyles()
  return (
    <div className='collection-preview '>
      <h1 className={classes.title}>{title.toUpperCase()}</h1>
      <Grid container className={classes.root} spacing={2}>
        {items
          ?.filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </Grid>
    </div>
  )
}

export default CollectionPreview
