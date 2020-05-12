import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CollectionPreviewItem from '../../components/collection-preview-Item/collection-preview-item'
import './collection-preview.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const CollectionPreview = ({ title, items }) => {
  const classes = useStyles()
  return (
    <div className='collection-preview'>
      <h1>{title.toUpperCase()}</h1>
      <Grid container className={classes.root} spacing={2}>
        {items
          ?.filter((item, index) => index < 4)
          .map((item) => (
            <CollectionPreviewItem key={item.id} {...item} />
          ))}
      </Grid>
    </div>
  )
}

export default CollectionPreview
