import shopActionTypes from './shop.type'
const INITIAL_STATE = {
    collections: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    const { UPDATE_COLLECTION } = shopActionTypes
    switch (action.type) {
        case UPDATE_COLLECTION:
            return {
                ...state,
                collections: action.payload,
            }
        default:
            return state
    }
}

export default shopReducer
