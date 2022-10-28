import academicReducer from './academic'
import positionReducer from './position'
import workerReducer from './worker'
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer:{
    worker: workerReducer,
    position: positionReducer,
    academic: academicReducer
  }
});
