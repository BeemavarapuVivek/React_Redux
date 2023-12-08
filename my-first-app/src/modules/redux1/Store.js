import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './Reducer';
const middleWare1=[thunk];
const store=createStore(reducer,
                       composeWithDevTools(applyMiddleware(...middleWare1)));
export default store;