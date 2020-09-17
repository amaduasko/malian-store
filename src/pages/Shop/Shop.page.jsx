import React from 'react'
import Container from '@material-ui/core/Container'
import CollectionPreviewItem from '../../containers/collection-preview/collection-preview'
import SHOP_DATA from '../../constants/shopData'
const ShopPage = () => (
    <Container>
        {SHOP_DATA.map(({ title, items, id }) => (
            <CollectionPreviewItem key={id} title={title} items={items} />
        ))}
    </Container>
)

export default ShopPage
