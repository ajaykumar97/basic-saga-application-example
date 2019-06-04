import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSega() {
    yield takeLatest('GET_ALL_DOGS_REQUEST', workerSega);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSega(params) {
    try {
        const allDogsResult = yield call(fetchDogs, params.params);
        const allDogs = allDogsResult.data.message;
        // dispatch a success action to the store with the new dog
        yield put({ type: 'GET_ALL_DOGS_REQUEST_SUCCESS', payload: allDogs });
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: 'GET_ALL_DOGS_REQUEST_FAILURE', payload: error.toString() });
    }
}

// function that makes the api request and returns a Promise for response
function fetchDogs(parameters) {
    return axios({
        method: 'GET',
        url: `https://dog.ceo/api/breed/${parameters.dogBreedName}/images/random`
    });
}
