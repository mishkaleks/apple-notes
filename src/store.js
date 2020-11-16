import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers/index';

const loggerMiddleware = createLogger();
const middleware = applyMiddleware(loggerMiddleware);

const store = createStore(reducer, middleware);

export default store;