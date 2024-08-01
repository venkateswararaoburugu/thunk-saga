import { createStore,applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import reducer from "./reducer";

import watchFetchData from "./saga";

const sagamiddleware = createSagaMiddleware();

const store = createStore(reducer,applyMiddleware(sagamiddleware))
sagamiddleware.run(watchFetchData)

export default store

