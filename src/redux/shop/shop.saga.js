import {takeEvery, call, put} from 'redux-saga/effects'

import ShopActionTypes from './shop.types'

import {fetchCollectionSuccess, fetchCollectionFailiure} from './shop.actions';
import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils';

export function* fetchCollectionAsync() {
    yield console.log("I'm fired")

    try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap))
    } catch (error) {
        yield put(fetchCollectionFailiure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery (
        ShopActionTypes.FETCH_COLLECTION_START, 
        fetchCollectionAsync
        )
}