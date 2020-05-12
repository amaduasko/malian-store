import React, { useState, useEffect } from 'react'
import { SHOP_DATA } from '../../constants/shopData'
import CollectionPreview from '../../containers/collection-preview/collection-preview'

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA)
  useEffect(() => {})
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
