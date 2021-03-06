import { createSelector } from "reselect";

const selectShop = state => state.shop;

const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectShopItems = createSelector(
    [selectShop],
    collection => collection.items
)

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam =>  
    createSelector(
        [selectCollections],
        (collections => collections ? collections[collectionUrlParam] : [])
    )

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)