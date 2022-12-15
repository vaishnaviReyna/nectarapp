
import {createStore,combineReducers} from 'redux';

import userReducer from "../reducer/index"

const rootReducer = combineReducers({
  userReducer: userReducer
  })
  
  const configureStore = () => createStore(rootReducer);
  
  export default configureStore;