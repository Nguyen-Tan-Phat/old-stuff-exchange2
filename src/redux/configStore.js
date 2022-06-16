
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { aditBuidingReducer } from './reducers/editBuildingReducer';
import { quanLyBuildingReducer } from './reducers/quanLyBuildingReducer';
import { quanLyPostReducer } from './reducers/quanLyPostReducer';
import { quanLyUserReducer } from './reducers/quanLyUserReducer';




const rootReducer = combineReducers({
    quanLyBuildingReducer,
    quanLyUserReducer,
    quanLyPostReducer,
    aditBuidingReducer,
});

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, composeCustom);