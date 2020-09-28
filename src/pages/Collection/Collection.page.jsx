import React from 'react'
import CollectionItem from '../../components/collection-Item/collection-item'
import Container from '@material-ui/core/Container'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'

import './Collection.style.scss'

const CollectionPage = ({ collection }) => (
    <Container>
        <h2>CATEGORY PAGE</h2>
    </Container>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.aprams.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
