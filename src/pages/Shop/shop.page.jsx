import React, {useState, useEffect} from "react";
import SHOP_DATA from '../../constants/shopData'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = () => {
    const [collections, setCollections] = useState(SHOP_DATA)
    useEffect(() => {})
    return (
        <div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export default ShopPage;
