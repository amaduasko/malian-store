import React from 'react'
import CollectionPreviewItem from '../../containers/collection-preview/collection-preview'
import { SHOP_DATA } from '../../constants/shopData'
const ShopPage = () => (
    <container>
        {SHOP_DATA.map(({ title, items, id }) => (
            <CollectionPreviewItem key={id} title={title} items={items} />
        ))}
    </container>
)

export default ShopPage
