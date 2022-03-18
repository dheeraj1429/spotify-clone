import { combineReducers } from 'redux';
import userReducer from './reducer';

const rootReducer = combineReducers({
    userStoreData: userReducer,
});

export default rootReducer;
