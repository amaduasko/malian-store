import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import CollectionPage from '../Collection/Collection.page'
import CollectionsOverview from '../../containers/collections-overview/collections-overview'
import {
    firestore,
    convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/withSpinner'
import collectionsOverview from '../../containers/collections-overview/collections-overview'

const CollectionsOverviewWithSpinner = WithSpinner(collectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match, updateCollections }) => {
    useEffect(() => {
        const collectionRef = firestore.collection('collections')
        let unsubscribeFromSnapshot = collectionRef.onSnapshot(
            async (snapshot) => {
                const collectionsMap = convertCollectionSnapshotToMap(snapshot)
                updateCollections(collectionsMap)
            }
        )

        return () => {
            unsubscribeFromSnapshot()
        }
    })
    return (
        <Container>
            <Route
                exact
                path={`${match.path}`}
                render={(props) => (
                    <CollectionsOverviewWithSpinner {...props} />
                )}
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={(props) => <CollectionPageWithSpinner {...props} />}
            />
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
        dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
