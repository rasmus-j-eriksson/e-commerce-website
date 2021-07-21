import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/preview-collection/collection-preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: SHOP_DATA
        }

    }

    render() {
        const {collection} = this.state;
        return (
            <div className='shop-page'>
                SHOP PAGE
                {
                    collection.map(({id, ...otherCollectionsProps}) => (
                        <CollectionPreview key={id} {...otherCollectionsProps} />
                    ))
                }
            </div>
        )
    }
}



export default ShopPage;