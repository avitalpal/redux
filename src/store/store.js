import { configureStore } from '@reduxjs/toolkit'
import { sessionReducer, sessionService } from 'redux-react-session';
import { combineReducers } from 'redux'
import user from './user'
const reducer = combineReducers({
  // here we will be adding reducers
  user,
})
const store = configureStore({
  reducer,
  session: sessionReducer
})

const validateSession = (session) => {
  // check if your session is still valid
  return true;
}

const options = {
  refreshOnCheckAuth: true,
  redirectPath: "/",
  driver: "COOKIES",
  validateSession
}

sessionService.initSessionService(store, options);

export default store;