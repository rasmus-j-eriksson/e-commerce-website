import React from 'react';
import CollectionItem from '../collection-item/collection-item.components'
import { withRouter } from 'react-router-dom';
import './collection-preview.styles.scss';


const CollectionPreview = ({ title, items, routeName, history, match }) => (
    <div className='collection-preview'>
        <h1 className='title'> {title.toUpperCase()} </h1>
        <div className='preview' onClick={() => history.push(`${match.url}/${routeName}`)}>
            {
                items.filter((item, i) => i < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
);

export default withRouter(CollectionPreview);