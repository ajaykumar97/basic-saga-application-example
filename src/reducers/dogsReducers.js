import {
    GET_ALL_DOGS_REQUEST,
    GET_ALL_DOGS_REQUEST_SUCCESS,
    GET_ALL_DOGS_REQUEST_FAILURE
} from '../actions';

const INITIAL_STATE = {
    dogImage: '',
    fetchingDog: false,
    error: ''
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case GET_ALL_DOGS_REQUEST:
            return {
                ...state,
                fetchingDog: true,
                error: ''
            };
        case GET_ALL_DOGS_REQUEST_SUCCESS:
            return {
                ...state,
                fetchingDog: false,
                dogImage: payload,
                error: ''
            };
        case GET_ALL_DOGS_REQUEST_FAILURE:
            return {
                ...state,
                fetchingDog: false,
                error: payload
            };
        default:
            return state;
    }
};
