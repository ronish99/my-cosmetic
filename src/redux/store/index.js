import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import commentSaga from "../../sagas/CommmentSAga";
import counterReducer from "../slice/CounterSlice";
// import counterReducer from "../slice/CounterSlice";
// import formReducer from "../slice/FormSlice";

const rootReducer = combineReducers({ counter: counterReducer });

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(commentSaga);
export default store;
