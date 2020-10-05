import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import CollectionPage from '../Collection/Collection.page'
import CollectionsOverview from '../../containers/collections-overview/collections-overview'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

const ShopPage = ({ match, fetchCollectionsStart }) => {
    useEffect(() => {
        fetchCollectionsStart()
    })

    return (
        <Container>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverview}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPage}
            />
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
