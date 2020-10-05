import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import WithSpinner from '../../components/with-spinner/withSpinner'
import { selectIsCollectionIsLoading } from '../../redux/shop/shop.selector'
import CollectionPageComponent from './collection.page.component'

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionIsLoading(state),
})

const CollectionPage = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPageComponent)

export default CollectionPage
