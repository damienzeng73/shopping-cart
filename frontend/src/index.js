import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import './index.css'
import App from './containers/App'
import rootReducer from './reducers/index'
import registerServiceWorker from './registerServiceWorker'
import { loginSuccess, setAuthorizationToken } from './actions/Auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken)
    store.dispatch(loginSuccess(jwtDecode(localStorage.jwtToken)))
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
