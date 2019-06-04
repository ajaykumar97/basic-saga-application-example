import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import { watcherSega } from './segas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware))
);

// run the saga
sagaMiddleware.run(watcherSega);

export default store;
