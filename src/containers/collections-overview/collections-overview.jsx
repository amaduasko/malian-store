import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import CollectionPreviewItem from '../collection-preview/collection-preview'
import './collections-overview.style.scss'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'

import WithSpinner from '../../components/with-spinner/withSpinner'

const CollectionsOverviewComponent = ({ collections }) => (
    <>
        {collections &&
            collections.map(({ title, items, id }) => (
                <CollectionPreviewItem key={id} title={title} items={items} />
            ))}
    </>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
    isLoading: selectIsCollectionFetching,
})
const CollectionsOverview = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverviewComponent)
export default CollectionsOverview
