import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './shop.styles.scss';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';

const ShopPage = ({ collections }) => (

    <div className='shop-page'>
        <CollectionsOverview/>
    </div>
)

export default ShopPage;