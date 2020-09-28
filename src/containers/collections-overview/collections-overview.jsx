import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollections } from '../../redux/shop/shop.selector'
import CollectionPreviewItem from '../collection-preview/collection-preview'
import './collections-overview.style.scss'

const CollectionsOverview = ({ collections }) => (
    <>
        {collections &&
            collections.map(({ title, items, id }) => (
                <CollectionPreviewItem key={id} title={title} items={items} />
            ))}
    </>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionsOverview)
