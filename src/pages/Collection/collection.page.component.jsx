import React from 'react'
import CollectionItem from '../../components/collection-Item/collection-item'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'

import './Collection.style.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 60,
    },
    title: {
        fontSize: 38,
        margin: ' 30px auto ',
        width: 'fit-content',
        backgroundColor: '#000',
        padding: '0.5rem 2rem',
        color: '#fff',
        borderRadius: '30px 30px 0px 0px',
    },
}))

const CollectionPageComponent = ({ collection }) => {
    const classes = useStyles()
    const { title, items } = collection
    return (
        <Container>
            <h2 className={classes.title}>{title}</h2>

            <Grid container className={classes.root} spacing={2}>
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} md={4} />
                ))}
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPageComponent)
