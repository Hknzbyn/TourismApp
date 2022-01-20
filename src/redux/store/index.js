import {rootReducer} from "../reducers/rootReducer"
import {createStore, applyMiddleware} from "redux"

const store = createStore(rootReducer)

export default store

