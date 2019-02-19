import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import currencyConverterReducer from '../reducers/currencyConverter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    return createStore(
        currencyConverterReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
};
