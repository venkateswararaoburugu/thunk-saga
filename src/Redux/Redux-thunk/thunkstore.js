import { createStore,applyMiddleware } from "redux";

import { thunk } from "redux-thunk";

import thunkreducer from "./thunkreducres";


const store = createStore(thunkreducer,applyMiddleware(thunk))
export default store