import {
    firestore,
    convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils'

import shopActionTypes from './shop.type'

const {
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILURE,
} = shopActionTypes

export const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
})

// export const fetchCollectionsStartAsync = () => {
//     return (dispatch) => {
//         const collectionRef = firestore.collection('collections')
//         dispatch(fetchCollectionsStart())

//         collectionRef
//             .get()
//             .then((snapshot) => {
//                 const collectionsMap = convertCollectionSnapshotToMap(snapshot)
//                 dispatch(fetchCollectionsSuccess(collectionsMap))
//             })
//             .catch((error) => {
//                 dispatch(fetchCollectionsFailure(error.message))
//             })
//     }
// }
