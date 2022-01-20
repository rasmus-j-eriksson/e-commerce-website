import React from 'react';
import { Route } from 'react-router-dom';
import './shop.styles.scss';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
    
    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props
        fetchCollectionStartAsync();
    }

    render() {

        const { match, isCollectionFetching } = this.props;     
        
        return (
            <div className='shop-page'>
                <Route exact path={ `${match.path}` } render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}   />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props}   />} />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);