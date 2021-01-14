import React, { useEffect, Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import Spinner from '../../components/spinner/spinner'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

const CollectionsOverview = lazy(() =>
    import('../../containers/collections-overview/collections-overview')
)
const CollectionPage = lazy(() => import('../Collection/Collection.page'))

const ShopPage = ({ match, fetchCollectionsStart }) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <Container>
            <Suspense fallback={Spinner}>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverview}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPage}
                />
            </Suspense>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
