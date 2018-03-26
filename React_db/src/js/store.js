import { applyMiddleware, createStore } from "redux"

import { createLogger } from 'redux-logger'
import promise from "redux-promise-middleware"
import thunk from "redux-thunk"
import { loadingBarMiddleware } from 'react-redux-loading-bar'

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, createLogger(), loadingBarMiddleware());

export default createStore(reducer, middleware)