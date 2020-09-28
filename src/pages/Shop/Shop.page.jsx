import React from 'react'
import { Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import CollectionPage from '../Collection/Collection.page'
import CollectionsOverview from '../../containers/collections-overview/collections-overview'

const ShopPage = ({ match }) => (
    <Container>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
        />
    </Container>
)

export default ShopPage
